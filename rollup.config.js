import fs from 'fs'
import path from 'path'
import ts from 'rollup-plugin-typescript2'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'

if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}
const isDev = process.env.NODE_ENV === 'development'

const masterVersion = require('./package.json').version
const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)
const resolve = p => path.resolve(packageDir, p)
const pkg = require(resolve(`package.json`))
const packageOptions = pkg.buildOptions || {}

const knownExternals = fs.readdirSync(packagesDir).filter(p => {
  return true
})

// ensure TS checks only once for each build
let hasTSChecked = false

const outputConfigs = {
  cjs: {
    dir: resolve('dist'),
    format: `cjs`
  }
}

const defaultFormats = ['cjs']
const inlineFormats = process.env.FORMATS && process.env.FORMATS.split(',')
const packageFormats = inlineFormats || packageOptions.formats || defaultFormats
const packageConfigs = packageFormats.map(format => createConfig(format, outputConfigs[format]))

export default packageConfigs

function createConfig(format, output, plugins = []) {
  if (!output) {
    console.log(require('chalk').yellow(`invalid format: "${format}"`))
    process.exit(1)
  }

  output.externalLiveBindings = false

  const shouldEmitDeclarations = process.env.TYPES != null && process.env.NODE_ENV === 'production' && !hasTSChecked

  const tsPlugin = ts({
    check: process.env.NODE_ENV === 'production' && !hasTSChecked,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
    tsconfigOverride: {
      compilerOptions: {
        declaration: shouldEmitDeclarations,
        declarationMap: shouldEmitDeclarations
      },
      include: ['packages/global.d.ts', 'packages/*/src', 'scripts/build.d.ts'],
      exclude: ['**/__tests__']
    }
  })
  // we only need to check TS and generate declarations once for each build.
  // it also seems to run into weird issues when checking multiple times
  // during a single build.
  hasTSChecked = false

  const srcDir = resolve('src')
  const files = fs
    .readdirSync(srcDir)
    .filter(p => {
      if (isDev && /get-default-webpack-config/.test(p)) return false
      return /\.ts/.test(p)
    })
    .map(path => resolve('src/' + path))

  return {
    input: files,
    external: knownExternals.concat(Object.keys(pkg.dependencies || []), Object.keys(pkg.peerDependencies || [])),
    plugins: [
      json({
        namedExports: false
      }),
      tsPlugin,
      createReplacePlugin(),
      ...plugins
    ],
    output,
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    }
  }
}

function createReplacePlugin() {
  const replacements = {
    __DEV__: `(process.env.NODE_ENV === 'development')`,
    __PRODUCTION__: `(process.env.NODE_ENV === 'production')`,
    __TEST__: `(process.env.TEST_ENV === 'jest')`,

    __NODE_ENV__: `(process.env.NODE_ENV)`,

    __DEBUG_PORT__: `(process.env.DEBUG_PORT)`,

    __COMMIT__: `"${process.env.COMMIT}"`,
    __VERSION__: `"${masterVersion}"`
  }
  Object.keys(replacements).forEach(key => {
    if (key in process.env) {
      replacements[key] = process.env[key]
    }
  })
  return replace(replacements)
}

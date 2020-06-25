process.env.TEST_ENV = 'jest'

module.exports = {
  preset: 'ts-jest',
  globals: {
    __DEV__: false,
    __PRODUCTION__: true,
    __TEST__: true,

    __NODE_ENV__: process.env.NODE_ENV,

    __DEBUG_PORT__: process.env.DEBUG_PORT || false,

    __VERSION__: require('./package.json').version,
  },
  watchPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^shared/(.*?)$': '<rootDir>/packages/shared/src/$1',
    '^@jsxls/(.*?)$': '<rootDir>/packages/$1/src',
  },
  rootDir: __dirname,
  testMatch: ['<rootDir>/**/__tests__/**/*spec.ts'],
  testPathIgnorePatterns: process.env.SKIP_E2E
    ? // ignore example tests on netlify builds since they don't contribute
      // to coverage and can cause netlify builds to fail
      ['/node_modules/', '/examples/__tests__']
    : ['/node_modules/'],
}

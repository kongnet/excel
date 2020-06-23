'use strict'

const fs = require('fs')
const readPkg = require('read-pkg-up')
const truncate = require('cli-truncate')
const wrap = require('wrap-ansi')
const pad = require('pad')
const Fuse = require('fuse.js')
const homeDir = require('home-dir')
const types = require('./lib/types')

const defaultConfig = {
  types,
  symbol: false
}

function getEmojiChoices ({ types, symbol }) {
  const maxNameLength = types.reduce(
    (maxLength, type) => (type.name.length > maxLength ? type.name.length : maxLength
    ), 0)

  return types.map(choice => ({
    name: `${pad(choice.name, maxNameLength)}  ${choice.emoji}  ${choice.description}`,
    value: symbol ? choice.emoji : choice.code,
    code: choice.code
  }))
}

function loadConfig () {
  const getConfig = (obj) => obj && obj.config && obj.config['cz-jt']

  return readPkg()
    .then(({ pkg }) => {
      const config = getConfig(pkg)
      if (config) return config

      return new Promise((resolve, reject) => {
        fs.readFile(homeDir('.czrc'), 'utf8', (err, content) => {
          if (err) reject(err)
          const czrc = (content && JSON.parse(content)) || null
          resolve(getConfig(czrc))
        })
      })
    })
    .then(config => (
      Object.assign({}, defaultConfig, config)
    ))
    .catch(() => (defaultConfig))
}

/**
 * Create inquier.js questions object trying to read `types` and `scopes` from the current project
 * `package.json` falling back to nice default :)
 *
 * @param {Object} config Result of the `loadConfig` returned promise
 * @return {Array} Return an array of `inquier.js` questions
 * @private
 */
function createQuestions (config) {
  const choices = getEmojiChoices(config)
  const fuzzy = new Fuse(choices, {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['name', 'code']
  })

  return [
    {
      type: 'autocomplete',
      name: 'type',
      message: '选择你要提交的类型（必填）:',
      source: (answersSoFar, query) => {
        return Promise.resolve(query ? fuzzy.search(query) : choices)
      }
    },
    {
      type: config.scopes ? 'list' : 'input',
      name: 'scope',
      message: '此更改的影响范围（回车忽略）:',
      choices: config.scopes && [{ name: '[none]', value: '' }].concat(config.scopes)
    },
    {
      type: 'input',
      name: 'subject',
      message: '键入简短描述（回车忽略）:'
    },
    {
      type: 'input',
      name: 'issues',
      message: '涉及的任务编号 [#1, ..]（回车忽略）:'
    },
    {
      type: 'input',
      name: 'body',
      message: '键入详细描述<100字（回车忽略）:'
    }
  ]
}

/**
 * Format the git commit message from given answers.
 *
 * @param {Object} answers Answers provide by `inquier.js`
 * @return {String} Formated git commit message
 */
function format (answers) {
  // parentheses are only needed when a scope is present
  const scope = answers.scope ? '(' + answers.scope.trim() + ') ' : ''

  // build head line and limit it to 100
  const head = truncate(answers.type + ' ' + scope + answers.subject.trim(), 100)

  // wrap body at 100
  const body = wrap(answers.body, 100)

  const footer = (answers.issues.match(/#\d+/g) || [])
    .map(issue => `完成/关闭 ${issue}`)
    .join('\n')

  return [head, body, footer]
    .join('\n\n')
    .trim()
}

/**
 * Export an object containing a `prompter` method. This object is used by `commitizen`.
 *
 * @type {Object}
 */
module.exports = {
  prompter: function (cz, commit) {
    cz.prompt.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))
    loadConfig()
      .then(createQuestions)
      .then(cz.prompt)
      .then(format)
      .then(commit)
  }
}

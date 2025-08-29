'use strict'

const config = require('@electerious/eslint-config')

module.exports = [
  ...config.default,
  {
    ignores: ['demos/**/*'],
  },
  {
    files: ['**/*.js'],
    rules: {
      'import-x/unambiguous': 'off',
      'import-x/no-commonjs': 'off',
      'unicorn/prefer-module': 'off',
      'no-restricted-properties': [
        'error',
        {
          object: 'assert',
          property: 'strictEqual',
          message: 'Use assert.equal instead',
        },
      ],
    },
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        location: 'readonly',
        window: 'readonly',
      },
    },
  },
]

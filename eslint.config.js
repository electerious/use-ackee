import config from '@electerious/eslint-config/react'

export default [
  ...config,
  {
    ignores: ['demos/**/*'],
  },
  {
    rules: {
      'import-x/unambiguous': 0,
      'import-x/no-commonjs': 0,
      'unicorn/prefer-global-this': 0,
      'unicorn/prefer-module': 0,
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

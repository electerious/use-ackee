import config from '@electerious/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...config,
  {
    files: ['src/**/*.js', 'test/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        location: 'readonly',
        window: 'readonly',
      },
    },
    rules: {
      'import-x/no-commonjs': 'off',
      'import-x/unambiguous': 'off',
      'unicorn/prefer-module': 'off',
    },
  },
])

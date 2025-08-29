'use strict'

const { test } = require('node:test')
const assert = require('node:assert')
const index = require('./../src/index.js')

test('index should be a function', function () {
  assert.equal(typeof index, 'function')
})

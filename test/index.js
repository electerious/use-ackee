import assert from 'node:assert/strict'
import test from 'node:test'
import index from '../src/index.js'

test('index should be a function', function () {
  assert.equal(typeof index, 'function')
})

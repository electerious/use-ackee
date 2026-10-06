'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const useAckee = require('../src/index.js')

test('exports useAckee as default and named export', () => {
	assert.equal(typeof useAckee, 'function')
	assert.equal(useAckee.useAckee, useAckee)
})

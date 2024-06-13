'use strict'

const assert = require('chai').assert
const index = require('./../src/index.js')

describe('index', function() {
	it('should be a function', function() {
		assert.isFunction(index)
	})
})
import { assert, expect } from 'chai';
import { useAckee, ackeeInstance } from './../build/index.js';
import * as ackeeTracker from "ackee-tracker";

describe('index', function () {
	it('should be a function', function () {
		assert.isFunction(useAckee)
	})
	it('ackeeInstance should be ackeeTracker.ackeeInstance type', () => {
		expect(ackeeInstance).to.be.a(typeof ackeeTracker.ackeeInstance)
	})
})
const list = require('../commands/list')
const assert = require('chai').assert

console.log(list)

describe('List', function() {

	it('should be a function', function() {
		let result = list
		assert.isFunction(result, "Is a function")
	})

	it('should list all tasks', function() {
		let result = list()
		assert.typeOf(result, "object")
	})
})
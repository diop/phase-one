'use strict'
const assert = require('chai').assert
const fs = require('fs')

module.exports = {
	
	add: (todo) => {
		let container = [(fs.readFileSync('tasks.json', "utf8", (err,data) => {
			if (err) throw error

			console.log(data)
		}))]
		
		let inc = 0
		inc++

		let obj = {
			id: inc,
			task: todo 
		}

		fs.appendFile('tasks.json',JSON.stringify(obj),'utf8', (err,data) => {
			if (err) throw error
			console.log('Created task ', obj.id)
		})

		console.log(container)

	}
}

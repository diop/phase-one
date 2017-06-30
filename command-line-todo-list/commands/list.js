'use strict'
const fs = require('fs')

module.exports = () => {
		fs.readFile('tasks.json', 'UTF-8', (err, data) => {
			if (err) throw err
			let parsed = JSON.parse(data)
			console.log('ID Description')
			console.log('-- -----------')
			console.log(parsed)
		})
}
'use strict'
const {add} = require('./commands/add')
const list = require('./commands/list')
const done = require('./commands/done')

const input = (arg1, arg2) => {
	switch(arg1){
		case 'add':
			add(arg2)
			break
		case 'list':
			list()
			break
		case 'done':
			done()
			break
	}
}

input(process.argv[2], process.argv[3])

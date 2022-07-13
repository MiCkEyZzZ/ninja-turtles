const dotenv = require('dotenv')
const algoliasearch = require('algoliasearch/lite')

try {
	dotenv.config()

	if (!process.env.AGOLIA_ID) {
		throw new Error('AGOLIA_ID is not defined')
	}

	if (!process.env.ADMIN_API_KEY) {
		throw new Error('ADMIN_API_KEY is not defined')
	}
} catch (error) {
	console.error(error)
	process.exit(1)
}

console.log('It works!')

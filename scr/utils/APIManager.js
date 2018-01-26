// APIManager.js
import Axios from 'axios';

export default {
	get: (url, callback)=> {

		Axios
		.get(url)
		.then((response) => {
			callback(null, response.data.results)
		})
		.catch((error) => {
			callback(error, null)
		})
	},

	post: (url, body, callback)=> {

		Axios
		.post(url, body)
		.then((response)=> {
			callback(null, response.data.results)
		})
		.catch((error)=> {
			callback(error, null)
		})
	},

	delete: (url, body, callback)=> {

		Axios
		.post(url, body)
		.then()
		.catch((error)=> {
			callback(error, null)
		})
	}
}
import mockData from '../../data/mockData'

const getUser = async (userId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = mockData.user(userId)
			if (data) {
				resolve(data)
			} else {
				reject(new Error('No data found for the given userId'))
			}
		}, 1000)
	})
}

export default getUser

import mockData from '../../data/mockData'

/**
 * getUser
 * @param {number} userId
 * @returns {Promise<object>}
 * @description Fetches user data from the mock data
 */
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

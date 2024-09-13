import mockData from '../../data/mockData'

/**
 * getAverageSession
 * @param {number} userId
 * @returns {Promise<object>}
 * @description Fetches user average sessions data from the mock data
 */
const getAverageSession = async (userId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = mockData.averageSessions(userId)
			if (data) {
				resolve(data)
			} else {
				reject(new Error('No data found for the given userId'))
			}
		})
	})
}

export default getAverageSession

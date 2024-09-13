import mockData from '../../data/mockData'

/**
 * getPerformance
 * @param {number} userId
 * @returns {Promise<object>}
 * @description Fetches user performance data from the mock data
 */
const getPerformance = async (userId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = mockData.performance(userId)
			if (data) {
				resolve(data)
			} else {
				reject(new Error('No data found for the given userId'))
			}
		})
	})
}

export default getPerformance

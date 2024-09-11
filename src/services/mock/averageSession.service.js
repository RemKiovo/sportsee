import mockData from '../../data/mockData'

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

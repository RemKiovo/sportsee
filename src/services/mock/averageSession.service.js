import mockData from '../../data/mockData'

const getAverageSession = async (userId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockData.averageSessions(userId))
		}, 500)
	})
}

export default getAverageSession

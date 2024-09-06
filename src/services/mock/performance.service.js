import mockData from '../../data/mockData'

const getPerformance = async (userId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockData.performance(userId))
		}, 500)
	})
}

export default getPerformance

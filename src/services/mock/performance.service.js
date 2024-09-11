import mockData from '../../data/mockData'

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

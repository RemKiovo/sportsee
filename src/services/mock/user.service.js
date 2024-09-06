import mockData from '../../data/mockData'

const getUser = async (userId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockData.user(userId))
		}, 500)
	})
}

export default getUser

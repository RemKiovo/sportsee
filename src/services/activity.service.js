import mockData from '../data/mockData'

const getActivity = async (userId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockData.activity(userId))
		})
	})
}

export default getActivity

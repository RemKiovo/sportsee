import mockData from '../../data/mockData'
const getActivity = async (userId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = mockData.activity(userId)
			if (data) {
				resolve(data)
			} else {
				reject(new Error('No data found for the given userId'))
			}
		})
	})
}
export default getActivity

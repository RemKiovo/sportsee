import axios from 'axios'

const getPerformance = async (userId) => {
	const response = await axios.get(
		`http://localhost:3000/user/${userId}/performance`
	)
	return response.data
}
export default getPerformance

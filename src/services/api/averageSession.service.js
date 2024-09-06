import axios from 'axios'

const getAverageSessions = async (userId) => {
	const response = await axios.get(
		`http://localhost:3000/user/${userId}/average-sessions`
	)
	return response.data
}
export default getAverageSessions

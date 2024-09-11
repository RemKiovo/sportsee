import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

const getAverageSessions = async (userId) => {
	const response = await axios.get(`${apiURL}/user/${userId}/average-sessions`)
	return response.data
}
export default getAverageSessions

import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

/**
 * getAverageSessions
 * @param {number} userId
 * @returns {Promise<object>}
 * @description Fetches user average sessions data from the API
 */
const getAverageSessions = async (userId) => {
	const response = await axios.get(`${apiURL}/user/${userId}/average-sessions`)
	return response.data
}
export default getAverageSessions

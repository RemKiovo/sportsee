import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

/**
 * getPerformance
 * @param {number} userId
 * @returns {Promise<object>}
 * @description Fetches user performance data from the API
 */
const getPerformance = async (userId) => {
	const response = await axios.get(`${apiURL}/user/${userId}/performance`)
	return response.data
}
export default getPerformance

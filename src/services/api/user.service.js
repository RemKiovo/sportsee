import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

/**
 * getUser
 * @param {number} userId
 * @returns {Promise<object>}
 * @description Fetches user data from the API
 */
const getUser = async (userId) => {
	const response = await axios.get(`${apiURL}/user/${userId}`)
	return response.data.data
}
export default getUser

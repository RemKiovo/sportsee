import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

/**
 * getActivity
 * @param {number} userId
 * @returns {Promise<object>}
 * @description Fetches user activity data from the API
 */
const getActivity = async (userId) => {
	const response = await axios.get(`${apiURL}/user/${userId}/activity`)
	return response.data.data
}
export default getActivity

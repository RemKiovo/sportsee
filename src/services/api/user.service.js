import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

const getUser = async (userId) => {
	const response = await axios.get(`${apiURL}/user/${userId}`)
	return response.data.data
}
export default getUser

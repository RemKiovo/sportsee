import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

const getActivity = async (userId) => {
	const response = await axios.get(`${apiURL}/user/${userId}/activity`)
	return response.data.data
}
export default getActivity

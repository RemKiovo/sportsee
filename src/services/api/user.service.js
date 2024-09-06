import axios from 'axios'

const getUser = async (userId) => {
	const response = await axios.get(`http://localhost:3000/user/${userId}`)
	return response.data.data
}
export default getUser

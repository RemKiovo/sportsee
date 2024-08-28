import axios from 'axios'

const getAverageSession = async (userId) => {
	const response = await axios.get(
		`http://localhost:3001/user/${userId}/average-sessions`
	)
	return response.data
}

export default getAverageSession

import axios from 'axios'

const getActivity = async (userId) => {
	const response = await axios.get(
		`http://localhost:3000/user/${userId}/activity`
	)
	return response.data.data
}
export default getActivity

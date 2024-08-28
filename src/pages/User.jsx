import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getUser from '../services/user.service'
const User = () => {
	const [user, setUser] = useState(null)
	const { userId } = useParams()

	useEffect(() => {
		const fetchUserData = async () => {
			const user = await getUser(userId)
			setUser(user)
		}
		fetchUserData()
	}, [userId])

	if (!user) return <p>Loading...</p>

	const { id, userInfos, score, todayScore, keyData } = user

	return (
		<main className='flex-1 px-14 py-10'>
			<h1 className='text-5xl'>
				Bonjour <span className='text-[#FF0101]'>{userInfos.firstName}</span>
			</h1>
			<h2 className='pt-5'>
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</h2>
		</main>
	)
}

export default User

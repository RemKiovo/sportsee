import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getUser from '../services/user.service'
import ActivityChart from '../components/ActivityChart'
import AverageChart from '../components/AverageChart'
import PerformanceChart from '../components/PerformanceChart'
import ScoreChart from '../components/ScoreChart'

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

	const { id, userInfos } = user

	return (
		<main className='flex-1 px-14 py-10'>
			<h1 className='text-5xl'>
				Bonjour <span className='text-[#FF0101]'>{userInfos.firstName}</span>
			</h1>
			<h2 className='py-5'>
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</h2>
			<section className='grid grid-cols-3 grid-rows-2 gap-10 max-h-[60vh]'>
				<ActivityChart userId={id} />
				<AverageChart userId={id} />
				<PerformanceChart userId={id} />
				<ScoreChart userId={id} />
			</section>
		</main>
	)
}

export default User

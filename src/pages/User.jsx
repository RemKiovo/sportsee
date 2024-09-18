import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getUser } from '../services/servicesClient'
import ActivityChart from '../components/ActivityChart'
import AverageChart from '../components/AverageChart'
import PerformanceChart from '../components/PerformanceChart'
import ScoreChart from '../components/ScoreChart'
import KeyValuesChart from '../components/KeyValuesChart'

/**
 * User
 * @returns {React.ReactNode}
 * @description User page component
 */
const User = () => {
	const [user, setUser] = useState(null)
	const [error, setError] = useState(null)
	const { userId } = useParams()

	useEffect(() => {
		/**
		 * fetchUserData
		 * @description Fetches user data from the API
		 * @async
		 */
		const fetchUserData = async () => {
			try {
				const user = await getUser(userId)
				setUser(user)
			} catch (error) {
				setError(error)
			}
		}
		fetchUserData()
	}, [userId])

	// If the error is an instance of Error, display the error message
	if (error instanceof Error)
		return (
			<main className='flex-1 pl-32 pr-14 pt-24 flex justify-center items-center'>
				<p className='text-3xl text-red-500'>
					Le profil de l&apos;utilisateur n&apos;existe pas
				</p>
			</main>
		)

	// If the user is not loaded, display a loading message
	if (!user)
		return (
			<main className='flex-1 pl-32 pr-14 pt-24 flex justify-center items-center'>
				<p className='text-3xl text-red-500'>Chargement...</p>
			</main>
		)

	const { userInfos, id } = user

	return (
		<main className='flex-1 pl-32 pr-14 pt-24'>
			<h1 className='text-5xl'>
				Bonjour <span className='text-[#FF0101]'>{userInfos.firstName}</span>
			</h1>
			<h2 className='py-5'>
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</h2>
			<div className='grid xl:grid-cols-4 grid-cols-3 xl:grid-rows-2 grid-rows-3 grid-flow-col xl:gap-10 gap-5 max-h-[80vh] xl:max-h-[60vh]'>
				<ActivityChart userId={id} />
				<AverageChart userId={id} />
				<PerformanceChart userId={id} />
				<ScoreChart userId={id} />
				<KeyValuesChart userId={id} />
			</div>
		</main>
	)
}

export default User

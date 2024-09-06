import propTypes from 'prop-types'
import { useEffect } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { getUser } from '../services/servicesClient'
import { useState } from 'react'

const ScoreChart = ({ userId }) => {
	const [userScore, setUserScore] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchUserScore = async () => {
			try {
				let getUserScore = await getUser(userId)
				getUserScore = getUserScore.todayScore * 100 || null
				setUserScore(getUserScore)
			} catch (error) {
				console.error(error)
				setError('Impossible de récupérer les données.')
			}
		}
		fetchUserScore()
	}, [userId, userScore])

	const data = [
		{ name: 'Score', score: userScore ? userScore : 0 },
		{ name: 'Rest', score: userScore ? 100 - userScore : 100 }
	]

	if (error)
		return (
			<article className='rounded-lg relative bg-gray-50 flex justify-center items-center'>
				<p className='text-center font-bold w-3/4'>{error}</p>
			</article>
		)

	if (!userScore)
		return (
			<article className='rounded-lg relative bg-gray-50'>
				<header className='p-5 font-bold absolute top-0 left-0'>
					<h3>Score</h3>
				</header>
				<div className='h-full w-full flex justify-center items-center'>
					<p className='text-center text-black font-bold w-3/4 xl:text-base text-sm'>
						Aucune données disponible
					</p>
				</div>
			</article>
		)

	return (
		<article className='rounded-lg relative bg-gray-50'>
			<header className='p-5 font-bold absolute top-0 left-0'>
				<h3>Score</h3>
			</header>
			<ResponsiveContainer width='100%' height='100%'>
				<PieChart>
					<Pie
						dataKey='score'
						data={data}
						cx='50%'
						cy='50%'
						outerRadius={90}
						innerRadius={80}
						startAngle={90}
						endAngle={720}
						stroke='none'
						cornerRadius={100}
					>
						<Cell fill='red' className='rounded-full' />
						<Cell fill='none' />
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<footer className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center'>
				<p className='text-center text-3xl font-bold'>
					{userScore}%<br />
					<span className='text-sm text-black/50'>de votre objectif</span>
				</p>
			</footer>
		</article>
	)
}

export default ScoreChart

ScoreChart.propTypes = {
	userId: propTypes.number.isRequired
}

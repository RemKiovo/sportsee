import propTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'

import { getAverageSession } from '../services/servicesClient'
import {
	Line,
	LineChart,
	Rectangle,
	ResponsiveContainer,
	Tooltip
} from 'recharts'

import { DAYS } from '../constants'

/**
 * CustomTooltipCursor
 * @param {object} props
 * @returns {React.ReactNode}
 * @description Custom tooltip cursor for the average chart
 */
const CustomTooltipCursor = (props) => {
	const { points, width, height } = props
	const { x, y } = points[0]
	const newHeight = height + 500
	const newY = y - 100
	return (
		<Rectangle
			fill='#E60000'
			x={x}
			y={newY}
			width={width}
			height={newHeight}
			className='-z-10'
		/>
	)
}

/**
 * CustomContent
 * @param {object} props
 * @returns {React.ReactNode}
 * @description Creates a black box with the average session length
 */
const CustomContent = ({ payload, active }) => {
	if (active && payload && payload.length) {
		const { value } = payload[0]
		return (
			<div className='bg-white text-black p-4 shadow-md flex flex-col items-center gap-y-4 text-sm'>
				<p>{value} min</p>
			</div>
		)
	}
	return null
}

const AverageChart = ({ userId }) => {
	const [average, setAverage] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchUserAverage = async () => {
			try {
				const userAverage = await getAverageSession(userId)
				setAverage(userAverage.data)
			} catch (error) {
				console.error(error)
				setError('Impossible de récupérer les données.')
			}
		}
		fetchUserAverage()
	}, [userId])

	if (error)
		return (
			<section className='rounded-lg relative bg-[#ff0000] flex justify-center items-center'>
				<p className='text-center text-white font-bold w-3/4'>{error}</p>
			</section>
		)

	if (!average)
		return (
			<section className='rounded-lg relative bg-[#ff0000]'>
				<header className='p-5 absolute top-0 left-0 w-2/3 font-bold z-10 pointer-events-none'>
					<h3 className='text-white/50 '>Durée moyenne des sessions</h3>
				</header>
				<div className='h-[60vh] w-full'></div>
				<footer className='absolute bottom-2 w-full pointer-events-none'>
					<p className='flex justify-between px-4'>
						{DAYS.map((label, index) => (
							<span key={index} className='text-white/50'>
								{label}
							</span>
						))}
					</p>
				</footer>
			</section>
		)

	const data = average.sessions.map((session) => ({
		day: session.day,
		sessionLength: session.sessionLength
	}))

	return (
		<section className='bg-[#FF0000] rounded-lg overflow-clip relative'>
			<header className='p-5 absolute top-0 left-0 xl:w-2/3 w-full font-bold z-10 pointer-events-none'>
				<h3 className='text-white/50 xl:text-base text-sm'>
					Durée moyenne des sessions
				</h3>
			</header>
			<ResponsiveContainer>
				<LineChart
					data={data}
					margin={{ left: -10, right: 0, bottom: 60, top: 60 }}
				>
					<Tooltip
						cursor={<CustomTooltipCursor />}
						content={<CustomContent />}
					/>
					<Line
						type='bump'
						animationBegin={0}
						dataKey='sessionLength'
						stroke='#fff'
						opacity={0.5}
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
			<footer className='absolute bottom-2 w-full pointer-events-none'>
				<p className='flex justify-between px-4'>
					{DAYS.map((label, index) => (
						<span key={index} className='text-white/50 xl:text-sm text-xs'>
							{label}
						</span>
					))}
				</p>
			</footer>
		</section>
	)
}

export default AverageChart

AverageChart.propTypes = {
	userId: propTypes.number
}

CustomTooltipCursor.propTypes = {
	payload: propTypes.array,
	points: propTypes.array,
	width: propTypes.number,
	height: propTypes.number,
	stroke: propTypes.string
}

CustomContent.propTypes = {
	active: propTypes.bool,
	payload: propTypes.array
}

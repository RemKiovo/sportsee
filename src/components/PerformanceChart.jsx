import propTypes from 'prop-types'
import { useEffect, useState } from 'react'
import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer
} from 'recharts'
import { getPerformance } from '../services/servicesClient'
import { translateKind } from '../constants'

/**
 * PerformanceChart
 * @param {object} props
 * @returns {React.ReactNode}
 * @description Creates a performance chart with the user's performance data
 */
const PerformanceChart = ({ userId }) => {
	const [performance, setPerformance] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		/**
		 * Asynchronous function to fetch user performance data
		 * @async
		 */
		const fetchUserPerformance = async () => {
			try {
				const userPerformance = await getPerformance(userId)
				setPerformance(userPerformance)
			} catch (error) {
				console.error(error)
				setError('Impossible de récupérer les données.')
			}
		}
		fetchUserPerformance()
	}, [userId])

	if (!performance || error)
		return (
			<section className='rounded-lg relative bg-[#282D30] flex justify-center items-center'>
				<p className='text-center text-white font-bold w-3/4'>
					{error || 'Impossible de récupérer les données.'}
				</p>
			</section>
		)

	const data = performance.data.data.map((item) => ({
		kind: translateKind(performance.data.kind[item.kind]),
		value: item.value
	}))

	return (
		<section className='bg-[#282D30] rounded-lg'>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart cx='50%' cy='50%' outerRadius='70%' data={data}>
					<PolarGrid />
					<PolarAngleAxis
						dataKey='kind'
						tick={{ fill: 'white', fontSize: 12 }}
					/>
					<Radar dataKey='value' fill='#FF0101' fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</section>
	)
}
export default PerformanceChart

PerformanceChart.propTypes = {
	userId: propTypes.number
}

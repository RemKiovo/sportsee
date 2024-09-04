import propTypes from 'prop-types'
import { useEffect } from 'react'
import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer
} from 'recharts'
import getPerformance from '../services/mock/performance.service'
import { useState } from 'react'

const translateKind = (kind) => {
	switch (kind) {
		case 'cardio':
			return 'Cardio'
		case 'energy':
			return 'Énergie'
		case 'strength':
			return 'Force'
		case 'endurance':
			return 'Endurance'
		case 'speed':
			return 'Vitesse'
		case 'flexibility':
			return 'Fléxibilité'
		case 'intensity':
			return 'Intensité'
		default:
			return kind
	}
}

const PerformanceChart = ({ userId }) => {
	const [performance, setPerformance] = useState(null)

	useEffect(() => {
		const fetchUserPerformance = async () => {
			const userPerformance = await getPerformance(userId)
			setPerformance(userPerformance)
		}
		fetchUserPerformance()
	}, [userId])

	if (!performance) return <article></article>

	const data = performance.data.data.map((item) => {
		return {
			kind: translateKind(performance.data.kind[item.kind]),
			value: item.value
		}
	})

	return (
		<article className='bg-[#282D30] rounded-lg'>
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
		</article>
	)
}
export default PerformanceChart

PerformanceChart.propTypes = {
	userId: propTypes.number
}

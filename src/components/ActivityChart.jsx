import { useEffect } from 'react'
import getActivity from '../services/activity.service'
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from 'recharts'
import { useState } from 'react'
import propTypes from 'prop-types'

const SmallerBar = (props) => {
	const { x, y, height, width, fill } = props
	return (
		<Rectangle
			x={x + width / 2}
			y={y}
			fill={fill}
			height={height}
			width={width / 4}
			radius={[50, 50, 0, 0]}
		/>
	)
}

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className='bg-[#E60000] text-white p-4 shadow-md flex flex-col items-center gap-y-4 font-bold'>
				<p>{payload[0].value} kg</p>
				<p>{payload[1].value} kCal</p>
			</div>
		)
	}
	return null
}

const ActivityChart = ({ userId }) => {
	const [activity, setActivity] = useState(null)
	useEffect(() => {
		const userFecthActivity = async () => {
			const userActivity = await getActivity(userId)
			setActivity(userActivity)
		}
		userFecthActivity()
	}, [userId])

	if (!activity) return

	const data = activity.map((activity, index) => {
		return {
			name: index + 1,
			poids: activity.kilogram,
			calories: activity.calories
		}
	})

	return (
		<article className='bg-gray-50 p-5 pb-10 col-span-full'>
			<header className='flex justify-between'>
				<h3>Activité quotidienne</h3>
				<div className='text-black/50 flex gap-10 '>
					<div className='flex justify-center items-center gap-5'>
						<div className='h-2 w-2 bg-black/70 rounded-full' />
						<p className='flex items-center gap-3'>Poids (kg)</p>
					</div>
					<div className='flex justify-center items-center gap-5'>
						<div className='h-2 w-2 bg-[#FF0101] rounded-full' />
						<p className='flex items-center gap-3'>Calories brûlées (kCal)</p>
					</div>
				</div>
			</header>
			<ResponsiveContainer width='100%' height='100%' className='mt-5 pb-5'>
				<BarChart data={data} barGap={20} className='w-full h-full'>
					<CartesianGrid strokeDasharray='5 5' vertical={false} />
					<XAxis dataKey='name' axisLine={false} tickMargin={15} tickLine={0} />
					<YAxis
						axisLine={false}
						tickLine={0}
						orientation='right'
						tickCount={3}
						tickMargin={20}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Bar
						dataKey='poids'
						fill='#4A4B4B'
						radius={[10, 10, 0, 0]}
						barSize={10}
					/>
					<Bar
						dataKey='calories'
						radius={[10, 10, 0, 0]}
						barSize={10}
						fill='#FF0101'
					/>
				</BarChart>
			</ResponsiveContainer>
		</article>
	)
}
export default ActivityChart

ActivityChart.propTypes = {
	userId: propTypes.number
}

SmallerBar.propTypes = {
	x: propTypes.number,
	y: propTypes.number,
	width: propTypes.number,
	height: propTypes.number,
	fill: propTypes.string
}

CustomTooltip.propTypes = {
	active: propTypes.bool,
	payload: propTypes.array
}

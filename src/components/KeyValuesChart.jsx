import propTypes from 'prop-types'
import { useEffect } from 'react'
import { getUser } from '../services/servicesClient'
import { useState } from 'react'
import energyIcon from '/icons/energy.svg'
import chickenIcon from '/icons/chicken.svg'
import appleIcon from '/icons/apple.svg'
import burgerIcon from '/icons/cheeseburger.svg'

const KeyValuesChart = ({ userId }) => {
	const [userKeyValues, setUserKeyValues] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchUserKeyValues = async () => {
			try {
				const userData = await getUser(userId)
				setUserKeyValues(userData.keyData)
			} catch (error) {
				console.error(error)
				setError('Impossible de récupérer les données.')
			}
		}
		fetchUserKeyValues()
	}, [userId])

	if (error)
		return (
			<article className='flex xl:flex-col flex-row xl:row-span-full justify-between xl:items-center items-start row-start-3 col-span-full xl:col-span-1 xl:col-start-4'>
				<p className='text-center text-black font-bold w-3/4'>{error}</p>
			</article>
		)

	if (!userKeyValues)
		return (
			<article className='flex xl:flex-col flex-row xl:row-span-full justify-between xl:items-center items-start row-start-3 col-span-full xl:col-span-1 xl:col-start-4'></article>
		)

	const data = [
		{
			name: 'Calories',
			value: `${new Intl.NumberFormat('en-US').format(
				userKeyValues.calorieCount
			)}kcal`,
			icon: energyIcon,
			color: 'bg-[#ff0000]'
		},
		{
			name: 'Proteines',
			value: `${userKeyValues.proteinCount}g`,
			icon: chickenIcon,
			color: 'bg-[#4ab8ff]'
		},
		{
			name: 'Glucides',
			value: `${userKeyValues.carbohydrateCount}g`,
			icon: appleIcon,
			color: 'bg-[#fdcc0c]'
		},
		{
			name: 'Lipides',
			value: `${userKeyValues.lipidCount}g`,
			icon: burgerIcon,
			color: 'bg-[#fd5181]'
		}
	]

	return (
		<aside className='flex xl:flex-col flex-row xl:row-span-full justify-between xl:items-center items-start row-start-3 col-span-full xl:col-span-1 xl:col-start-4'>
			{data.map((item, index) => (
				<article
					key={index}
					className='flex items-center gap-5 min-w-[200px] bg-gray-50 p-5 rounded-lg'
				>
					<figure
						className={`${item.color} bg-opacity-20 flex justify-center items-center rounded-lg h-10 w-10`}
					>
						<img src={item.icon} alt={item.name} className='h-5 w-5 m-3' />
					</figure>
					<figcaption className='flex flex-col flex-grow'>
						<span className='font-bold xl:text-xl text-sm'>{item.value}</span>
						<span className='font-black opacity-50 xl:text-sm text-xs'>
							{item.name}
						</span>
					</figcaption>
				</article>
			))}
		</aside>
	)
}
export default KeyValuesChart
KeyValuesChart.propTypes = {
	userId: propTypes.number.isRequired
}

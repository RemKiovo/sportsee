import propTypes from 'prop-types'
import { useEffect } from 'react'
import getUser from '../services/mock/user.service'
import { useState } from 'react'
import energyIcon from '/icons/energy.svg'
import chickenIcon from '/icons/chicken.svg'
import appleIcon from '/icons/apple.svg'
import burgerIcon from '/icons/cheeseburger.svg'

const KeyValuesChart = ({ userId }) => {
	const [userKeyValues, setUserKeyValues] = useState(null)
	useEffect(() => {
		const fetchUserKeyValues = async () => {
			const userData = await getUser(userId)

			setUserKeyValues(userData.keyData)
		}
		fetchUserKeyValues()
		console.log(userKeyValues)
	}, [userId, userKeyValues])

	if (!userKeyValues) return <article></article>

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
		<section className='flex flex-col row-span-2 justify-between '>
			{data.map((item, index) => (
				<article
					key={index}
					className='flex items-center gap-5 bg-gray-50 p-5 rounded-lg'
				>
					<figure
						className={`${item.color} bg-opacity-20 flex justify-center items-center rounded-lg`}
					>
						<img src={item.icon} alt={item.name} className='p-5' />
					</figure>
					<figcaption className='flex flex-col flex-grow'>
						<span className='font-bold text-xl'>{item.value}</span>
						<span className='font-black opacity-50'>{item.name}</span>
					</figcaption>
				</article>
			))}
		</section>
	)
}
export default KeyValuesChart
KeyValuesChart.propTypes = {
	userId: propTypes.number.isRequired
}

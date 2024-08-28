import { useEffect, useState } from 'react'
import getUser from './services/user.service'
import getActivity from './services/activity.service'
import './App.css'

function App() {
	const [user, setUser] = useState(null)
	const [userActivity, setUserActivity] = useState(null)

	useEffect(() => {
		const fetchUserData = async () => {
			const user = await getUser(12)
			const userActivity = await getActivity(12)

			setUser(user.data)
			setUserActivity(userActivity.data)
		}

		fetchUserData()
	}, [])

	if (!user) return <h1>Loading...</h1>

	return (
		<main>
			<h1>Hello, World!</h1>
			<h2>API</h2>
			<h3 className='font-bold text-xl'>Get User</h3>
			<section className='flex gap-4'>
				<p>{user.id}</p>
				<p>{user.userInfos.firstName}</p>
				<p>{user.userInfos.lastName}</p>
				<p>{user.userInfos.age}</p>
			</section>

			<h3 className='font-bold text-xl'>Get Activity</h3>
			<section className='text-red-500 flex gap-4 w-full'>
				{userActivity.sessions.map((session, index) => (
					<div key={index} className='flex-1'>
						<p>Day: {session.day}</p>
						<p>SessionLength: {session.sessionLength}</p>
						<p>KG: {session.kilogram}</p>
						<p>Calories: {session.calories}</p>
					</div>
				))}
			</section>
		</main>
	)
}

export default App

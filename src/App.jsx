import { useEffect } from 'react'
import './App.css'

function App() {
	useEffect(() => {
		window.location.pathname = '/user/12'
	}, [])

	return <main></main>
}

export default App

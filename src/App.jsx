import { useEffect } from 'react'

/**
 * App
 * @returns {React.ReactNode}
 * @description Main app component returns to the user page
 */
function App() {
	useEffect(() => {
		window.location.pathname = '/user/12'
	}, [])

	return <main></main>
}

export default App

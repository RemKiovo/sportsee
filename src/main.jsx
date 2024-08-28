import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import User from './pages/User.jsx'
import Header from './components/Header.jsx'
import Sider from './components/Sider.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router>
			<div className='h-screen flex flex-col'>
				<Header />
				<div className='flex flex-1'>
					<Sider />
					<Routes>
						<Route path='/' element={<App />} />
						<Route path='/user/:userId' element={<User />} />
					</Routes>
				</div>
			</div>
		</Router>
	</StrictMode>
)

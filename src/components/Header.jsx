import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { MENUTITEMS } from '../constants'

/**
 * Header
 * @returns {React.ReactNode}
 * @description Creates a header with a logo and a navigation menu
 */
const Header = () => {
	return (
		<header className='fixed top-0 left-0 w-full z-50'>
			<nav className='flex items-center gap-5 bg-black px-5'>
				<Link>
					<img src='/logo.png' alt='' className='w-36' />
				</Link>
				<ul className='flex items-center justify-around w-full'>
					{MENUTITEMS.map((item, index) => (
						<NavLink
							key={index}
							to={item.path}
							className='my-5 mx-10 text-white font-semibold border-b border-transparent hover:border-white transition-all'
						>
							{item.label}
						</NavLink>
					))}
				</ul>
			</nav>
		</header>
	)
}
export default Header

import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { MENUTITEMS } from '../constants'

const Header = () => {
	return (
		<header>
			<nav className='flex items-center gap-5 bg-black px-5'>
				<Link>
					<img src='/logo.png' alt='' className='w-36' />
				</Link>
				<ul className='flex items-center justify-around w-full'>
					{MENUTITEMS.map((item, index) => (
						<NavLink
							key={index}
							to={item.path}
							className='py-5 px-10 text-white font-semibold'
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

import meditate from '/sidebar/meditate.png'
import swim from '/sidebar/swim.png'
import bike from '/sidebar/bike.png'
import weight from '/sidebar/weight.png'

const icons = [meditate, swim, bike, weight]

const Sider = () => {
	return (
		<aside className='bg-black fixed top-0 left-0 w-24 h-full z-40'>
			<nav className='h-full flex flex-col justify-center items-center'>
				<ul className='flex flex-col gap-5 px-5'>
					{icons.map((icon, index) => (
						<li key={index} className=''>
							<a href='#'>
								<img
									src={icon}
									alt='icon'
									className='h-14 w-14 hover:scale-110 transition-all'
								/>
							</a>
						</li>
					))}
				</ul>
				<p className='text-white -rotate-90 absolute bottom-20 text-xs text-nowrap'>
					Copyright, SportSee 2020
				</p>
			</nav>
		</aside>
	)
}
export default Sider

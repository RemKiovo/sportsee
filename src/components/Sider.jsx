import meditate from '/sidebar/meditate.png'
import swim from '/sidebar/swim.png'
import bike from '/sidebar/bike.png'
import weight from '/sidebar/weight.png'

const icons = [meditate, swim, bike, weight]

const Sider = () => {
	return (
		<div className='bg-black relative'>
			<nav className='h-full flex flex-col justify-center items-center'>
				<ul className='flex flex-col gap-5 px-5'>
					{icons.map((icon, index) => (
						<li key={index} className=''>
							<a href='#'>
								<img src={icon} alt='icon' className='h-14 w-14' />
							</a>
						</li>
					))}
				</ul>
				<p className='text-white -rotate-90 absolute bottom-20 text-xs text-nowrap'>
					Copyright, SportSee 2020
				</p>
			</nav>
		</div>
	)
}
export default Sider

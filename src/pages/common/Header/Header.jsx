import gsap from 'gsap'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GoButton from '../GoButton/GoButton'
import './header.less'
function Header() {
	const [isActive, setActive] = useState(false)

	const toggleClass = () => {
		setActive(true)
		const tl = gsap.timeline()
		tl.fromTo(
			'.line-b',
			{ y: 0 },
			{
				y: '-100vh',
				duration: 0.5,
				stagger: 0.2,
			}
		)
		tl.fromTo(
			'.shar',
			{ y: '110vh' },
			{
				y: '0',
				duration: 0.5,
				stagger: 0.2,
				ease: 'power3.inOut',
			}
		)
	}
	const hover = e => {
		gsap.fromTo(
			e.target,
			{
				scale: 0.6,
			},
			{
				scale: 1.02,
			}
		)
	}
	const back = () => {
		setActive(false)
		const tl2 = gsap.timeline()
		tl2
			.fromTo(
				'.shar',
				{ y: '0' },
				{
					y: '110vh',
					duration: 0.5,
					stagger: 0.2,
					ease: 'power3.inOut',
				}
			)
			.set('.shar', { clearProps: 'all' })
		tl2.fromTo(
			'.line-b',
			{ y: '-100vh' },
			{
				y: '0',
				duration: 0.5,
				stagger: 0.2,
			}
		)
	}

	return (
		<header className='main-header'>
			<div
				onClick={toggleClass}
				className={isActive ? 'active burger-menu' : 'not-active burger-menu'}
			>
				<div className='line1 line'></div>
				<div className='line2 line'></div>
			</div>

			<GoButton />

			<div className='menu'>
				<div className='background-menu'>
					<div className='line-b line1'></div>
					<div className='line-b line2'></div>
					<div className='line-b line3'></div>
					<div className='line-b line4'></div>
				</div>

				<NavLink
					to='/blog'
					onClick={back}
					onMouseDown={hover}
					className='shar shar4'
				>
					Блог
				</NavLink>
				<NavLink
					to='/every'
					onClick={back}
					onMouseDown={hover}
					className='shar shar3'
				>
					Всякое
				</NavLink>
				<NavLink
					to='/portfolio'
					onClick={back}
					onMouseDown={hover}
					className='shar shar2'
				>
					Портфолио
				</NavLink>
				<NavLink
					to='/'
					onClick={back}
					onMouseDown={hover}
					className='shar shar1'
				>
					Главная
				</NavLink>
				<div onMouseDown={hover} onClick={back} className='shar back'>
					Назад
				</div>
			</div>
		</header>
	)
}

export default Header

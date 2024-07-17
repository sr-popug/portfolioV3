import { NavLink } from 'react-router-dom'
import axios from './images/axios.png'
import gh from './images/gh.svg'
import gsapImg from './images/gsap.png'
import js from './images/js.png'
import less from './images/less.png'
import mobx from './images/mobx.png'
import next from './images/next.png'
import react from './images/react.png'
import redux from './images/redux.png'
import sass from './images/sass.png'
import ts from './images/typescript.png'
import wp from './images/wp.png'
import './portfolio.less'
import projects from './projects'

function whatTech(tech) {
	switch (tech) {
		case 'react':
			return <img src={react} alt='' className='react' />
		case 'next':
			return <img src={next} alt='' className='next' />
		case 'js':
			return <img src={js} alt='' className='js' />
		case 'axios':
			return <img src={axios} alt='' className='axios' />
		case 'redux':
			return <img src={redux} alt='' className='redux' />
		case 'ts':
			return <img src={ts} alt='' className='ts' />
		case 'sass':
			return <img src={sass} alt='' className='sass' />
		case 'gsap':
			return <img src={gsapImg} alt='' className='gsap' />
		case 'wp':
			return <img src={wp} alt='' className='wp' />
		case 'less':
			return <img src={less} alt='' className='less' />
		case 'mobx':
			return <img src={mobx} alt='' className='mobx' />
	}
}
export default function PortfolioPage() {
	return (
		<article className='projects-page'>
			<div className='pag'>
				<NavLink to='/'>Главная</NavLink>-
				<NavLink to='/portfolio'>Портфолио</NavLink>
			</div>
			<h2 className='h2-title'>Мои Работы</h2>

			<article className='projects-list'>
				{projects.length &&
					projects.map(project => {
						return (
							<a href={project.link} key={project.id} className='project'>
								<div className='top'>
									{whatTech(project.techs[0])}
									<a href={project.linkGH}>
										<img src={gh} alt='github' className='github' />
									</a>
								</div>
								<h3>{project.title}</h3>
								<p>{project.description.substring(0, 150)}...</p>
								<div className='line'></div>
								<div className='bottom'>
									<div className='date'>{project.date}</div>
									<div className='techs'>
										{project.techs.map(tech => {
											return whatTech(tech)
										})}
									</div>
								</div>
							</a>
						)
					})}
			</article>
		</article>
	)
}

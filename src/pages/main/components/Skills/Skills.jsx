import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from './images/axios.png'
import background from './images/background2.jpg'
import css from './images/css-3.png'
import git from './images/git.png'
import gsapImg from './images/gsap.png'
import html from './images/html-5.png'
import js from './images/js.png'
import next from './images/next.png'
import react from './images/react.png'
import redux from './images/redux.png'
import sass from './images/sass.png'
import ts from './images/typescript.png'
import wp from './images/wp.png'
import './skills.less'
function Skills() {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.box',
				start: 'bottom bottom ',
				end: '+=1000',
				scrub: 1,
			},
		})
		tl.fromTo(
			'.soft-skills',
			{
				x: 0,
			},
			{
				x: '12vw',
			}
		)
	})
	return (
		<article className='skills'>
			<article className='background'>
				<img src={background} alt='' />
			</article>
			<article className='content'>
				<h2 className='soft-skills'>HARD SKILLS</h2>
				<section className='box'>
					<article className='item item1'>
						<img src={wp} alt='css' />
						<section className='right'>
							<h3>Wordpress</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Быстрые и удобные в разработке сайты</p>
						</section>
					</article>

					<article className='item item2'>
						<img src={html} alt='html' />
						<section className='right'>
							<h3>HTML</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Самая база верстки</p>
						</section>
					</article>

					<article className='item item3'>
						<img src={css} alt='css' />
						<section className='right'>
							<h3>CSS</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>То, что украшает HTML</p>
						</section>
					</article>

					<article className='item item4'>
						<img src={js} alt='js' />
						<section className='right'>
							<h3>JavaScript</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Где логика?</p>
						</section>
					</article>

					<article className='item item5'>
						<img src={react} alt='react' />
						<section className='right'>
							<h3>React JS</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Самая популярная библиотека JS</p>
						</section>
					</article>

					<article className='item item6'>
						<img src={ts} alt='ts' />
						<section className='right'>
							<h3>TypeScript</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Динамическая типизация JS</p>
						</section>
					</article>

					<article className='item item7'>
						<img src={sass} alt='sass' />
						<section className='right'>
							<h3>Препроцессоры</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>LESS, SCSS, SASS</p>
						</section>
					</article>

					<article className='item item8'>
						<img src={redux} alt='redux' />
						<section className='right'>
							<h3>Redux</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Хранение данных между страницами</p>
						</section>
					</article>

					<article className='item item9'>
						<img src={axios} alt='axios' />
						<section className='right'>
							<h3>Axios</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Отправка запросов на сервер</p>
						</section>
					</article>

					<article className='item item10'>
						<img src={next} alt='next' />
						<section className='right'>
							<h3>Next JS</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>SEO оптимизированный React</p>
						</section>
					</article>

					<article className='item item11'>
						<img src={gsapImg} alt='gsap' />
						<section className='right'>
							<h3>GSAP</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Красивые анимашки : 3</p>
						</section>
					</article>

					<article className='item item12'>
						<img src={git} alt='git' />
						<section className='right'>
							<h3>Система Git</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Передача версий программы</p>
						</section>
					</article>

					<article className='item item1'>
						<img src={wp} alt='css' />
						<section className='right'>
							<h3>Wordpress</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Быстрые и удобные в разработке сайты</p>
						</section>
					</article>

					<article className='item item2'>
						<img src={html} alt='html' />
						<section className='right'>
							<h3>HTML</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Самая база верстки</p>
						</section>
					</article>

					<article className='item item3'>
						<img src={css} alt='css' />
						<section className='right'>
							<h3>CSS</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>То, что украшает HTML</p>
						</section>
					</article>

					<article className='item item4'>
						<img src={js} alt='js' />
						<section className='right'>
							<h3>JavaScript</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Где логика?</p>
						</section>
					</article>

					<article className='item item5'>
						<img src={react} alt='react' />
						<section className='right'>
							<h3>React JS</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Самая популярная библиотека JS</p>
						</section>
					</article>

					<article className='item item6'>
						<img src={ts} alt='ts' />
						<section className='right'>
							<h3>TypeScript</h3>
							<section className='points'>
								<div className='point'></div>
								<div className='point'></div>
								<div className='point'></div>
							</section>
							<p>Динамическая типизация JS</p>
						</section>
					</article>
				</section>
			</article>
		</article>
	)
}

export default Skills

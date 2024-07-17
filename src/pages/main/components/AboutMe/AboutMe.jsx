import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import star from '../../../../../public/star_blue.svg'
import stars from '../../../../../public/stars_orange.svg'
import triangle from '../../../../../public/треугольник.png'
import './aboutMe.less'
import git from './images/git.svg'
import gmail from './images/gmail.svg'
import iam from './images/iam.png'
import tg from './images/tg.svg'
import vk from './images/vk.svg'
import watsapp from './images/watsapp.svg'

function AboutMe() {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.aboutMe',
				start: 'center bottom ',
			},
		})
		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: '.aboutMe',
				start: 'bottom bottom ',
				end: '+=1000',
				scrub: 1,
			},
		})
		tl2.fromTo(
			'.triangle2-1',
			{
				x: 0,
			},
			{
				x: '-10vw',
			}
		)
		tl2.fromTo(
			'.triangle2-2',
			{
				x: 0,
			},
			{
				x: '10vw',
			}
		)
		tl.fromTo(
			'.par',
			{
				opacity: 0,
				x: -520,
				scale: 0,
			},
			{
				opacity: 1,
				scale: 1,
				x: 0,
				stagger: 0.2,
				duration: 0.5,
				ease: 'power3.inOut',
			}
		)
	})
	return (
		<article className='aboutMe'>
			<article className='background'>
				<img className='triangle2-1' src={triangle} alt='треугольник' />
				<img className='triangle2-2' src={triangle} alt='треугольник' />

				<div className='line line1'></div>
				<div className='line line2'></div>
			</article>

			<article className='content'>
				<section className='row1'>
					<div className='par about-h2'>
						<h2 className='offer-h2 offer-offer'>Обо мне</h2>
					</div>
					<div className='pars'>
						<p className='par'>
							Привет! Я <span>фронтенд</span> разработчик! Я уже долгое время
							изучаю это направление разработки и активно ищу работу в этой
							сфере. Я всё детство провел в спорте, и поэтому во мне воспитались
							такие черты характера как{' '}
							<span>целеустремленность, ответственность и терпение</span>. Я
							каждый день учу что-то новое, чтобы ни на шаг не отставать от тех,
							кто в этом преисполнился!
						</p>
						<p className='par'>
							Каждый мой проект <span>индивидуален</span> и совсем не похож на
							тонны других! Позвольте мне разлить свои краски в ваши проекты и
							показать вам, насколько я хорош)
						</p>
					</div>
					<div className='socials'>
						<a
							target='_blank'
							className='par'
							href='https://github.com/sr-popug'
						>
							<img src={git} alt='git' />
						</a>
						<a
							target='_blank'
							className='par'
							href='mailto:antonpower2008@gmail.com'
						>
							<img src={gmail} alt='gmail' />
						</a>
						<a target='_blank' className='par' href='https://t.me/Anton_sitego'>
							<img src={tg} alt='tg' />
						</a>
						<a target='_blank' className='par' href='https://vk.com/plenka_phx'>
							<img src={vk} alt='vk' />
						</a>
						<a
							target='_blank'
							className='par'
							href='https://api.whatsapp.com/send?phone=89020365517'
						>
							<img src={watsapp} alt='watsapp' />
						</a>
					</div>
				</section>
				<section className='row2'>
					<img src={star} alt='' className='star star1' />
					<img src={stars} alt='' className='star star2' />
					<img src={iam} alt='iam' />
				</section>
			</article>
		</article>
	)
}

export default AboutMe

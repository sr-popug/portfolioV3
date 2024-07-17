import { NavLink } from 'react-router-dom'
import './footer.less'
import gh from './images/gh.svg'
import mail from './images/mail.svg'
import tg from './images/tg.svg'
import vk from './images/vk.svg'
import watsapp from './images/watsapp.svg'
function Footer() {
	return (
		<footer id='footer' className='main-footer'>
			<div className='background'></div>
			<div className='content'>
				<div className='row1'>
					<a
						target='_blank'
						href='https://api.whatsapp.com/send?phone=89020365517'
					>
						<img src={watsapp} alt='watsapp' />
						WhatsApp
					</a>
					<a target='_blank' href='https://vk.com/plenka_phx'>
						<img src={vk} alt='vk' />
						ВКонтакте
					</a>
					<a target='_blank' href='https://t.me/Anton_sitego'>
						<img src={tg} alt='tg' />
						Telegram
					</a>
					<a target='_blank' href='mailto:antonpower2101@gmail.com'>
						<img src={mail} alt='mail' />
						Почта
					</a>
					<a target='_blank' href='https://github.com/sr-popug'>
						<img src={gh} alt='github' />
						GitHub
					</a>
				</div>
				<div className='row2'>
					<ul>
						<li>
							<NavLink to='/'>Главная</NavLink>
						</li>
						<li>
							<NavLink to='/portfolio'>Портфолио</NavLink>
						</li>
						<li>
							<NavLink to='/every'>Всякое</NavLink>
						</li>
						<li>
							<NavLink to='/blog'>Блог</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer

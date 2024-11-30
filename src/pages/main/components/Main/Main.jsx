import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import backgroundImg from './images/фон.jpg'
import './main.less'

function Main() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    tl.fromTo(
      '.spanchik',
      { opacity: 0, y: 100 },
      { opacity: 1, duration: 0.4, y: 0, stagger: 0.3, ease: 'power3.inOut' }
    )
  })
  return (
    <article className='main-mainpage'>
      <article className='background'>
        <img src={backgroundImg} alt='img' />
      </article>

      <article className='content'>
        <h1 className=''>
          <span className='name spanchik'>Антон Цуканов </span>
          <span className='spanchik spanchik2'>
            <span className='blue '>фронтенд</span> разработчик. Создаю цифровые{' '}
            <a href='#works' className='orange '>
              шедевры
            </a>
            .
          </span>
        </h1>
      </article>
      <a
        href='/Резюме_Антона_Цуканова.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='resume'
      >
        Моё резюме ➞
      </a>
    </article>
  )
}

export default Main

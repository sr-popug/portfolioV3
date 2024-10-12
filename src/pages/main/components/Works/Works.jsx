import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NavLink } from 'react-router-dom'
import triangle from '../../../../../public/треугольник.png'
import projects from '../../../../scripts/projects'
import arrow from './images/arrow-link.svg'
import gh from './images/gh.svg'
import './works.less'

function Works() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.works',
        start: 'top center',
      },
    })
    tl.fromTo(
      '.work-gsap',
      {
        opacity: 0,
        y: -120,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power3.inOut',
      }
    ).set('.work-gsap', { clearProps: 'all' })
  })
  return (
    <article id='works' className='works'>
      <article className='background'>
        <img className='triangle3-1' src={triangle} alt='треугольник' />
        <img className='triangle3-2' src={triangle} alt='треугольник' />

        <div className='line line1'></div>
        <div className='line line2'></div>
      </article>

      <article className='content'>
        <div className='about-h2'>
          <h2 className='offer-h2'>Мои работы</h2>
        </div>
        <article className='projects'>
          {projects.length &&
            projects.slice(0, 5).map(project => {
              return (
                <div key={project.id} className='project'>
                  <img
                    src={new URL(`${project.img}`, import.meta.url).href}
                    alt='project'
                    className='work-gsap'
                  />
                  <div className='info'>
                    <h3 className='work-gsap'>{project.title}</h3>
                    <p className='work-gsap'>{project.description}</p>
                    <div className='techs'>
                      {project.tech.length &&
                        project.tech.map((tech, i) => {
                          return (
                            <div key={i} className='tech work-gsap'>
                              {tech}
                            </div>
                          )
                        })}
                    </div>
                    <div className='links'>
                      <a className='work-gsap' href={project.link}>
                        Live-Demo
                        <img src={arrow} alt='link' />
                      </a>
                      <a className='work-gsap' href={project.link}>
                        GitHub <img src={gh} alt='link' />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
        </article>
        <NavLink className='all' to='/portfolio'>
          {' '}
          Все работы {'->'}
        </NavLink>
      </article>
    </article>
  )
}

export default Works

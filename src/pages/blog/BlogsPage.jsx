import { NavLink } from 'react-router-dom'
import blogsExp from '../../scripts/blogs-array.js'
import './blogPage.less'
import clockSvg from './images/clock.svg'
export default function BlogsPage() {
  return (
    <article className='blog-page'>
      <div className='pag'>
        <NavLink to='/'>Главная</NavLink>-<NavLink to='/blog'>Блог</NavLink>
      </div>
      <h2 className='h2-title'>Все статьи</h2>

      <ul>
        {blogsExp.map(blog => {
          return (
            <li key={blog.id}>
              <NavLink to={`/blog/${blog.id}`}>
                <div className='left'>
                  <h3>{blog.title}</h3>
                  <p>{blog.pars[0].text.substring(0, 50)}...</p>
                  <p className='date'>{blog.date}</p>
                </div>

                <div className='right'>
                  <img src={clockSvg} alt='time' />
                  <span>{blog.time} минут</span>
                </div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

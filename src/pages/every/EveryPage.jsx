import { NavLink } from 'react-router-dom'
import everys from '../../scripts/every'
import './everyPage.less'

export default function EveryPage() {
  return (
    <article className='every-page'>
      <div className='pag'>
        <NavLink to='/'>Главная</NavLink>-<NavLink to='/every'>Всякое</NavLink>
      </div>
      <h2 className='h2-title'>Всякое разное</h2>
      <section className='everys'>
        {everys.map(every => {
          return (
            <article key={every.id} className='ag-courses_item'>
              <NavLink to={every.link} className='ag-courses-item_link'>
                <div
                  style={{ background: every.color }}
                  className='ag-courses-item_bg'
                ></div>

                <div className='ag-courses-item_title'>{every.title}</div>

                <span className='ag-courses-item_date'>{every.date}</span>
              </NavLink>
            </article>
          )
        })}
      </section>
    </article>
  )
}

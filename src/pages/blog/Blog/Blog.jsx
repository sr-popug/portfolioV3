import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import blogsExp from '../blogs-array'
import './blog.less'
const whatPar = (el, i) => {
	switch (el.typeOfText) {
		case 'par':
			return (
				<article key={i} className='par'>
					{el.typeOfH == '2' ? <h2>{el.h}</h2> : <h3>{el.h}</h3>}

					<p>{el.text}</p>
				</article>
			)
		case 'ul':
			return (
				<article key={i} className='par ul'>
					{el.typeOfH == '2' ? <h2>{el.h}</h2> : <h3>{el.h}</h3>}

					<ul>
						{el.li.map((li, i) => {
							return <li key={i}>{li}</li>
						})}
					</ul>
				</article>
			)
		case 'strong':
			return (
				<strong key={i} className='par strong'>
					{el.text}
				</strong>
			)
	}
}
export default function Blog() {
	const params = useParams()

	const blog = blogsExp.find(el => el.id === Number(params.id))
	return (
		<article className='blog'>
			<div className='top-page'>
				<div className='pag'>
					<NavLink to='/'>Главная</NavLink>-<NavLink to='/blog'>Блог</NavLink>-
					<NavLink to={`/blog/${params.id}`}>{blog.title}</NavLink>
				</div>
				<div className='time'> Время чтения: {blog.time} минут</div>
			</div>
			<div className='top'>
				<h1>{blog.title}</h1>

				<div className='img'>
					<figure>
						<img
							src={new URL(`../images/${blog.id}.png`, import.meta.url).href}
							alt={blog.title}
						/>
						<figcaption>{blog.desc_img}</figcaption>
					</figure>
				</div>
			</div>
			<section className='pars'>
				{blog.pars.map((el, i) => {
					return whatPar(el, i)
				})}
			</section>
			<NavLink className='to-all' to='/blog'>
				Все статьи →
			</NavLink>
		</article>
	)
}

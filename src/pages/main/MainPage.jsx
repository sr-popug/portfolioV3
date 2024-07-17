import AboutMe from './components/AboutMe/AboutMe'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'

function MainPage() {
	return (
		<article className='mainpage'>
			<Main />
			<Skills />
			<AboutMe />
			<Works />
		</article>
	)
}

export default MainPage

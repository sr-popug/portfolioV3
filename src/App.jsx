import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './index.less'
import Blog from './pages/blog/Blog/Blog'
import BlogsPage from './pages/blog/BlogsPage'
import Footer from './pages/common/Footer/Footer'
import Header from './pages/common/Header/Header'
import MiniModal from './pages/common/MiniModal/MiniModal'
import EveryPage from './pages/every/EveryPage'
import Calculator from './pages/every/pages/calculator/Calculator'
import TikTakToe1 from './pages/every/pages/ttt1/TikTakToe1'
import TikTakToe2 from './pages/every/pages/ttt2/TikTakToe2'
import MainPage from './pages/main/MainPage'
import PortfolioPage from './pages/portfolio/PortfolioPage'

function App() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/portfolio' element={<PortfolioPage />} />

				<Route path='/blog' element={<BlogsPage />} />
				<Route path='/blog/:id' element={<Blog />} />

				<Route path='/every' element={<EveryPage />} />
				<Route path='/every/tik-tak-toe1' element={<TikTakToe1 />} />
				<Route path='/every/tik-tak-toe2' element={<TikTakToe2 />} />
				<Route path='/every/calculator' element={<Calculator />} />
			</Routes>
			<Footer />
			<MiniModal />
		</>
	)
}

export default App

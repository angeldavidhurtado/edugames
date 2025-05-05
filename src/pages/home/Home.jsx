import Nav from '@/components/nav/Nav'
import Banner from '@/components/banner/Banner'
import Games from '@/components/games/Games'
import Footer from '@/components/footer/Footer'
import useVisibilityObserver from '@/hooks/useVisibilityObserver'
import './Home.css'

function Home() {
	const [isVisible, elementRef] = useVisibilityObserver({
		rootMargin: '-67px 0px 0px',
		thresold: 0
	})

	return (
		<div className="home">
			<Nav className="home-nav" showIco={isVisible} />
			<Banner className="home-banner" elementRef={elementRef} />
			<Games className='home-games' />
			<Footer />
		</div>
	)
}

export default Home

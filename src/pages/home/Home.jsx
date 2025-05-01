import Nav from '@/components/nav/Nav'
import Banner from '@/components/banner/Banner'
import Games from '@/components/games/Games'
import useVisibilityObserver from '@/hooks/useVisibilityObserver'

function Home() {
	const [isVisible, elementRef] = useVisibilityObserver({
		rootMargin: '-67px 0px 0px',
		thresold: 0
	})

	return (
		<>
			<Nav showIco={isVisible} />
			<Banner elementRef={elementRef} />
			<Games />
		</>
	)
}

export default Home

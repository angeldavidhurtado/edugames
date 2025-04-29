import Nav from '@/components/nav/Nav'
import Banner from '@/components/banner/Banner'
import Games from '@/components/games/Games'
import Test from '@/components/test/Test'

function Home() {
	return (
		<>
			<Nav />
			<Test />
			<Banner />
			<Games />
		</>
	)
}

export default Home

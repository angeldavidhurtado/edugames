import { useParams } from 'react-router-dom'
import Nav from '@/components/nav/Nav'
import Games from '@/components/games/Games'
import Footer from '@/components/footer/Footer'
import './PlayGame.css'

function PlayGame() {
	const { idGame } = useParams()

	return (
		<>
			<Nav />
			<div className="game-content">
				<div className="gradient-blue"></div>
				<iframe className="game" src={`/edugames/${idGame}.html`}></iframe>
				<div className="gradient-red"></div>
			</div>
			<Games />
			<Footer />
		</>
	)
}

export default PlayGame

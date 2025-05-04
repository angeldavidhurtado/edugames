import { useParams } from 'react-router-dom'
import Nav from '@/components/nav/Nav'
import Games from '@/components/games/Games'
import './PlayGame.css'

function PlayGame() {
	const { idGame } = useParams()
	// https://scratch.mit.edu/projects/${idGame}/embed

	return (
		<>
			<Nav />
			<div className="game-content">
				<div className="gradient-blue"></div>
				<iframe
					className="game"
					src={`/edugames/256539458 - 6.3 7.3 - Sesión 3. Áreas y Perímetros.html`}
				></iframe>
				<div className="gradient-red"></div>
			</div>
			<Games />
		</>
	)
}

export default PlayGame

import { useParams } from 'react-router-dom'
import Nav from '@/components/nav/Nav'
import Games from '@/components/games/Games'
import './PlayGame.css'

function PlayGame() {
	const { idGame } = useParams()

	return (
		<>
			<Nav />
			<div className="game-content">
				<div className="gradient-blue"></div>
				<iframe
					className="game"
					src={`https://scratch.mit.edu/projects/${idGame}/embed`}
				></iframe>
				<div className="gradient-red"></div>
			</div>
			<Games />
		</>
	)
}

export default PlayGame

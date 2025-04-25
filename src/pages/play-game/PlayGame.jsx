import { useParams } from 'react-router-dom'

function PlayGame() {
	const { idGame } = useParams()

	return (
		<>
			<h1>Play Game</h1>
			<p>{idGame}</p>
		</>
	)
}

export default PlayGame

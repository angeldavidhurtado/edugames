import { Link } from 'react-router-dom'
import gamesScratch from '@/data/gamesScratch'
import './Games.css'

function Games() {
	return (
		<section className="games">
			{gamesScratch.map(game =>
				<Link to={`/game/${game.id}`} key={game.id}>
					<img
						src={`https://uploads.scratch.mit.edu/get_image/project/${game.id}_200x150.png`}
						alt=""
					/>
				</Link>
			)}
		</section>
	)
}

export default Games

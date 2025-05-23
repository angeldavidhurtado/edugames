import { Link } from 'react-router-dom'
import allGamesScratch from '@/data/gamesScratch'
import './Games.css'

function Games({ className, gamesScratch = allGamesScratch }) {
	return (
		<section className={`games ${className}`}>
			{gamesScratch.map(game =>
				<Link to={`/game/${game.id}`} key={game.id}>
					<img
						src={`/edugames/cover/${game.id}.png`}
						alt=""
					/>
				</Link>
			)}
		</section>
	)
}

export default Games

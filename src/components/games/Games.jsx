import { Link } from 'react-router-dom'
import gamesScratchId from '@/data/gamesScratchId'
import './Games.css'

function Games() {
	return (
		<section className="games">
			{gamesScratchId.map(id =>
				<Link to={`/game/${id}`} key={id}>
					<img
						src={`https://uploads.scratch.mit.edu/get_image/project/${id}_200x150.png`}
						alt=""
					/>
				</Link>
			)}
		</section>
	)
}

export default Games

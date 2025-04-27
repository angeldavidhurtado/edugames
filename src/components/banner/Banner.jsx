import { useState } from 'react'
import { Link } from 'react-router-dom'
import gamesScratch from '@/data/gamesScratch'
import BannerCarousel from '@/components/banner-carousel/BannerCarousel'
import './Banner.css'

function Banner() {
	const [showCarousel, setShowCarousel] = useState(true)
	const toggleCarousel = () => {
		console.log('a')
		setShowCarousel(prev => !prev)
	}

	const gamesBanner = gamesScratch.filter(game =>
		game.categories.find(categorie => categorie == 'banner')
	)
	const imgs = gamesBanner.map(game => `https://uploads.scratch.mit.edu/get_image/project/${game.id}_350x500.png`)

	return (
		<div className="banner">
			<button onClick={toggleCarousel} style={{marginTop: '50px'}}>
				{showCarousel ? 'Ocultar carrusel' : 'Mostrar carrusel'}
			</button>
			<div className="carousel">
				{showCarousel && (
					<BannerCarousel items={imgs} speed={60} />
				)}
				{/*
				gamesBanner.map(game =>
					<Link key={game.id}>
						<img
							src={`https://uploads.scratch.mit.edu/get_image/project/${game.id}_350x500.png`}
							alt=""
						/>
					</Link>
				)*/
				}
			</div>
		</div>
	)
}

export default Banner

import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gamesScratch, { gamesScratchCategories } from '@/data/gamesScratch'
import './Banner.css'

function Banner() {
	const Carousel = useRef(null)
	const carouselPosX = useRef(0)
	const lastTime = useRef(performance.now())
	const rafId = useRef(null)
	const speed = useRef(60 / 1000)

	let gamesBanner = gamesScratch.filter(game =>
		game.categories.includes(gamesScratchCategories.banner)
	)
	gamesBanner = [...gamesBanner, ...gamesBanner]

	useEffect(() => {
		const gap = parseInt(getComputedStyle(Carousel.current).gap) / 2

		const animate = time => {
			const carousel = Carousel.current
			if (!carousel) return
      const delta = time - lastTime.current
      lastTime.current = time
      carouselPosX.current -= speed.current * delta
			const totalWidth = carousel.scrollWidth / 2
			if (-carouselPosX.current > totalWidth)
				carouselPosX.current = gap
      carousel.style.transform = `translateX(${carouselPosX.current}px)`
      rafId.current = requestAnimationFrame(animate)
		}
		rafId.current = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(rafId.current)
	}, [])

	const stopAnimation = () => speed.current = 0
	const continueAnimation = () => speed.current = 60 / 1000

	return (
		<div className="banner">
			<img className="edugames" src="/img/edugames.png" alt="EduGames" />
			<div
				ref={Carousel}
				className="carousel"
				onMouseEnter={stopAnimation}
				onMouseLeave={continueAnimation}
			>
				{gamesBanner.map((game, index) =>
					<Link to={`/game/${game.id}`} key={index}>
						<img
							src={`https://uploads.scratch.mit.edu/get_image/project/${game.id}_350x500.png`}
							alt=""
						/>
					</Link>
				)}
			</div>
		</div>
	)
}

export default Banner

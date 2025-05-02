import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import gamesScratch from '@/data/gamesScratch'
import Nav from '@/components/nav/Nav'
import Games from '@/components/games/Games'

function Search() {
	const { grade } = useParams()
	const gradeGames = useRef(null)

	useEffect(() => {
		const escapedGrade = grade.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
		const regex = new RegExp(`^${escapedGrade}(?:\\.\\d+)?$`)
		gradeGames.current = gamesScratch.filter(game => 
			game.categories.some(category => regex.test(category))
		)
		console.log(gradeGames.current)
	}, [grade])

	return (
		<>
			<Nav />
			{/*
			<Games gamesScratch={gradeGames.current} />
			*/}
		</>
	)
}

export default Search

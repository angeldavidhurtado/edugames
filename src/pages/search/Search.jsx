import { useEffect, useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import gamesScratch from '@/data/gamesScratch'
import Nav from '@/components/nav/Nav'
import Games from '@/components/games/Games'
import Footer from '@/components/footer/Footer'

function Search() {
	const { grade } = useParams()

	const gradeGames = useMemo(() => {
		const escapedGrade = grade.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
		const regex = new RegExp(`^${escapedGrade}(?:\\.\\d+)?$`)
		return gamesScratch.filter(game => 
			game.categories.some(category => regex.test(category))
		)
	}, [grade])

	return (
		<>
			<Nav />
			<Games gamesScratch={gradeGames} />
			<Footer />
		</>
	)
}

export default Search

import { Navigate } from 'react-router-dom'
import Home from '@/pages/home/Home'
import PlayGame from '@/pages/play-game/PlayGame'
import Search from '@/pages/search/Search'

const routes = [
	{ index: true, element: <Home /> },
	{ path:"game/:idGame", element: <PlayGame /> },
	{ path: "search/:grade", element: <Search /> },
	{ path: "*", element: <Navigate to="/" replace /> }
]

export default routes

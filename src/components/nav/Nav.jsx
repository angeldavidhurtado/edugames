import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import sloganMini from '@/assets/img/slogan-mini.webp'
import './Nav.css'

function Nav({ className, showIco = true }) {
	const logo = useRef(null)
	const slogan = useRef(null)
	const navigate = useNavigate()

	const selectGrade = e => navigate(`/search/${e.target.value}`)

	return (
		<nav className={className}>
			<ul>
				<li>
					<img
						ref={logo}
						src="/img/edugames-medium.webp"
						alt="edugames logo medium"
						className={`logo ${!showIco && 'hidden'}`}
						draggable="false"
						onClick={() => {navigate('/')}}
					/>
				</li>
				<li>
					<form>
						<select name="grade" onChange={selectGrade}>
							<option value="">Curso</option>
							<option value="6">6°</option>
							<option value="7">7°</option>
							<option value="8">8°</option>
							<option value="9">9°</option>
							<option value="10">10°</option>
							<option value="11">11°</option>
						</select>
					</form>
				</li>
				<li>
					<img
						ref={slogan}
						src={sloganMini}
						alt="edugames slogan mini"
						draggable="false"
						className={`${!showIco && 'hidden'}`}
					/>
				</li>
			</ul>
		</nav>
	)
}

export default Nav

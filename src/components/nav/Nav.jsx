import sloganMini from '@/assets/img/slogan-mini.webp'
import './Nav.css'

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<img
						src="/img/edugames-medium.webp"
						alt="edugames logo medium"
						className="logo"
						draggable="false"
					/>
				</li>
				<li>
					<form>
						<select name="grade">
							<option value="">Curso</option>
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
						src={sloganMini}
						alt="edugames slogan mini"
						draggable="false"
					/>
				</li>
			</ul>
		</nav>
	)
}

export default Nav

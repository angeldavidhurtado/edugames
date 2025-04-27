import { useRef } from 'react'

function Test() {
	const data = useRef(0)
	let d = 0
	const count = () => {
		data.current += 1
		d += 1
		console.log(`Data ${data.current}, d ${d}`)
	}

	console.log('Test.jsx render')

	return (
		<>
			<h2>Contador</h2>
			<p>data {data.current}</p>
			<p>d {d}</p>
			<button onClick={count}>Contar</button>
		</>
	)
}

export default Test

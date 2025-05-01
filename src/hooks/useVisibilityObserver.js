import { useState, useRef, useEffect } from 'react'

function useVisibilityObserver(options = { thresold: 0 }) {
	const elementRef = useRef(null)
	const [isVisible, setVisible] = useState(true)

	useEffect(() => {
		const callback = ([entry]) => {
			setVisible(!entry.isIntersecting)
		}
		const observer = new IntersectionObserver(callback, options)
		if (elementRef.current)
			observer.observe(elementRef.current)
		return () => {
			if (elementRef.current)
				observer.unobserve(elementRef.current)
		}
	}, [options])

	return [isVisible, elementRef]
}

export default useVisibilityObserver

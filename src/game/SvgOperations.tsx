import styles from './styles/operations.module.css'

export const SvgPlus = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 448 512`}
			className={styles.svg}
		>
			<path d="M256 80a32 32 0 10-64 0v144H48a32 32 0 100 64h144v144a32 32 0 1064 0V288h144a32 32 0 100-64H256V80z"></path>
		</svg>
	)
}

export const SvgMinus = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 448 512`}
			className={styles.svg}
		>
			<path d="M432 256a32 32 0 01-32 32H48a32 32 0 110-64h352a32 32 0 0132 32z"></path>
		</svg>
	)
}

export const SvgMultiplication = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 384 512`}
			className={styles.svg}
		>
			<path d="M342.6 150.6a32 32 0 00-45.3-45.3L192 210.7 86.6 105.4a32 32 0 00-45.3 45.3L146.7 256 41.4 361.4a32 32 0 0045.3 45.3L192 301.3l105.4 105.3a32 32 0 0045.3-45.3L237.3 256l105.3-105.4z"></path>
		</svg>
	)
}

export const SvgDivision = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 448 512`}
			className={styles.svg}
		>
			<path d="M272 96a48 48 0 10-96 0 48 48 0 1096 0zm0 320a48 48 0 10-96 0 48 48 0 1096 0zm128-128a32 32 0 100-64H48a32 32 0 100 64h352z"></path>
		</svg>
	)
}

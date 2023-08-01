// Import conponents and styles.modules
import Operations from './Operations'
import NavBar from './NavBar'
import styles from './styles/index.module.css'

function Game() {
	return (
		<>
			<NavBar />
			<div className={styles.box}>
				<Operations />
			</div>
		</>
	)
}

export default Game

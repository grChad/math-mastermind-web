// Import Components and Styles.module and Images
import styles from './styles/navBar.module.css'

import ImageUser from '../assets/images/users/user01.png'

function NavBar() {
	return (
		<div className={styles.container}>
			<div className={styles.leftBox}>
				<img src={ImageUser} alt="User" />
				<p>Thiago</p>
			</div>
			<div className={styles.middleBox}>
				<p>Fácil</p>
				<div>⭐⭐⭐⭐</div>
			</div>
			<div className={styles.rightBox}>
				<p>Progreso</p>
				<p>0 / 20</p>
			</div>
		</div>
	)
}

export default NavBar

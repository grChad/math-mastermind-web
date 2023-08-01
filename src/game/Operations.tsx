// Import Components and Styles.module
import { SvgPlus, SvgMinus, SvgMultiplication, SvgDivision } from './SvgOperations'
import styles from './styles/operations.module.css'

function Operations() {
	return (
		<div className={styles.container}>
			<div className={styles.floatName}>
				<p>Sumar</p>
			</div>
			<div className={styles.operations}>
				<div>
					<p>34</p>
					<p>23</p>
				</div>
				<div className={styles.divider}></div>
				<div>
					<p className={styles.answer}>57</p>
				</div>
			</div>
			<div>
				<SvgPlus />
				<SvgMinus />
				<SvgMultiplication />
				<SvgDivision />
			</div>
		</div>
	)
}

export default Operations

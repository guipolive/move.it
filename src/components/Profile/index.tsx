import styles from './Profile.module.css'

export function Profile() {
	return(
		<div className={styles.ProfileContainer} >
			<img src="http://github.com/guipolive.png" alt="Guilherme"/>
			<div>
				<strong>Guilherme</strong>
				<p>
					<img src="icons/level.svg" alt="Level"/>
					Level 1
				</p>
			</div>
		</div>
	)
}
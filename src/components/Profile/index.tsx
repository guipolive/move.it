import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContexts'
import styles from './Profile.module.css'

export function Profile() {
	const {level} = useContext(ChallengesContext);

	return(
		<div className={styles.ProfileContainer} >
			<img src="http://github.com/guipolive.png" alt="Guilherme"/>
			<div>
				<strong>Guilherme</strong>
				<p>
					<img src="icons/level.svg" alt="Level"/>
					Level {level}
				</p>
			</div>
		</div>
	)
}
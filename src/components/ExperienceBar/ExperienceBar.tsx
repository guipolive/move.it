import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContexts';
import styles from './ExperienceBar.module.css';

export function ExperienceBar() {
	const { currentExperience } = useContext(ChallengesContext)

	return(
		<header className={styles.ExperienceBar} >
			<span>0xp</span>
			<div>
				<div style={{width: '50%'}} />

				<span 
					className={styles.ExperienceBar__totalXp}
					style={{left: '50%'}} 
				>
					{currentExperience}
				</span>
			</div>
			<span>600xp</span>
		</header>
	)
}
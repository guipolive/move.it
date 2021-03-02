import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './ExperienceBar.module.css';

export function ExperienceBar() {
	const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

	const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

	return(
		<header className={styles.ExperienceBar} >
			<span>0xp</span>
			<div>
				<div style={{width: `${percentToNextLevel}%`}} />

				<span 
					className={styles.ExperienceBar__totalXp}
					style={{left: `${percentToNextLevel}%`}} 
				>
					{currentExperience}
				</span>
			</div>
			<span>{ experienceToNextLevel }</span>
		</header>
	)
}
import styles from './ExperienceBar.module.css';

export function ExperienceBar() {
	return(
		<header className={styles.ExperienceBar} >
			<span>0xp</span>
			<div>
				<div style={{width: '50%'}} />

				<span 
					className={styles.ExperienceBar__totalXp}
					style={{left: '50%'}} 
				>
					300xp
				</span>
			</div>
			<span>600xp</span>
		</header>
	)
}
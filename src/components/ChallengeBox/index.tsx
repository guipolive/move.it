import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContexts';
import styles from './ChallengeBox.module.css';

export function ChallengeBox() {
	const contextData = useContext(ChallengesContext);

	const hasActiveChallenge = true;

	console.log(contextData);

	return(
		<div className={styles.ChallengeBox}>
			{hasActiveChallenge ? (
				<div className={styles.ChallengeBox__active} >
					<header>Ganhe 400 xp</header>

					<main>
						<img src="icons/body.svg" alt="Ok"/>
						<strong>Novo desafio</strong>
						<p>Levante e faça 10 flexões</p>
					</main>

					<footer>
						<button 
							type="button"
							className={styles.ChallengeBox__active__failedButton}
						>
							Falhei
						</button>
						<button 
							type="button"
							className={styles.ChallengeBox__active__succeededButton}
						>
							Completei
						</button>
					</footer>
				</div>
			) : 
			
				<div className={styles.ChallengeBox__notActive}>
					<strong>Finalize um ciclo para receber um desafio</strong>
					<p>
						<img src="icons/level-up.svg" alt="Level up"/>
						Ganhe XP ao completar um desafio
					</p>
				</div>
			}
		</div>
	)
}
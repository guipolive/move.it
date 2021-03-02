import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from './ChallengeBox.module.css';

export function ChallengeBox() {
	const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
	const {resetCountdown} = useContext(CountdownContext);

	function handleChallengeSucceeded() {
		completeChallenge();
		resetCountdown();
	}

	function handleChallengeFailed() {
		resetChallenge
		resetCountdown();
	}

	return(
		<div className={styles.ChallengeBox}>
			{activeChallenge ? (
				<div className={styles.ChallengeBox__active} >
					<header>Ganhe {activeChallenge.amount}</header>

					<main>
						<img src={`icons/${activeChallenge.type}.svg`} alt="Ok"/>
						<strong>Novo desafio</strong>
						<p>{activeChallenge.description}</p>
					</main>

					<footer>
						<button 
							type="button"
							className={styles.ChallengeBox__active__failedButton}
							onClick={handleChallengeFailed}
							>
							Falhei
						</button>
						<button 
							type="button"
							className={styles.ChallengeBox__active__succeededButton}
							onClick={handleChallengeSucceeded}
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
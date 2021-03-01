import { useEffect, useState, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContexts';
import styles from './Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

const time = 0.05*60;

export function Countdown() {
	const {startNewChallenge} = useContext(ChallengesContext);

	const [counter, setCounter] = useState(time);
	const [isCountdownActive, setIsCountdownActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);

	const minutes = Math.floor(counter / 60);
	const seconds = counter % 60;

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	function startCountdown() {
		setIsCountdownActive(true);
		setHasFinished(false);
	}

	function resetCountdown() {
		clearTimeout(countdownTimeout);
		setIsCountdownActive(false);
		setCounter(time);
	}

	useEffect(() => {
		if(isCountdownActive && counter > 0){
			countdownTimeout = setTimeout(() => {
				setCounter(counter - 1);
			}, 1000)
		} else if (isCountdownActive && counter === 0) {
			setHasFinished(true);
			setIsCountdownActive(false);
			setCounter(time);
			startNewChallenge();
		}
	}, [isCountdownActive, counter]);

	return(
		<div>
			<div className={styles.Countdown}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{hasFinished && (
				<button 
					disabled
					className={`${styles.Countdown__button} ${styles.Countdown__button__finished}`}
				>
					Ciclo completo!
				</button>
			)}

			{isCountdownActive
				? (
					<button 
						type="button"
						className={`${styles.Countdown__button} ${styles.Countdown__button__active}`}
						onClick={resetCountdown}
					>
						Abandonar ciclo
					</button>
				)
				: (
					<button 
						type="button"
						className={styles.Countdown__button}
						onClick={startCountdown}
					>
						Iniciar
					</button>
				)
			}


		</div>
	)
}
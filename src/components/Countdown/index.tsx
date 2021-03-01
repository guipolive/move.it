import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from './Countdown.module.css';

export function Countdown() {
	const {
		minutes, 
		seconds,
		hasFinished,
		isCountdownActive,
		resetCountdown,
		startCountdown
	} = useContext(CountdownContext);


	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

			{isCountdownActive &&
				<button 
					type="button"
					className={`${styles.Countdown__button} ${styles.Countdown__button__active}`}
					onClick={resetCountdown}
				>
					Abandonar ciclo
				</button>
			}
			
			<button 
				type="button"
				className={styles.Countdown__button}
				onClick={startCountdown}
			>
				Iniciar
			</button>


		</div>
	)
}
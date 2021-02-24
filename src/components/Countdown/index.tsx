import { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

export function Countdown() {
	const [counter, setCounter] = useState(25 * 60);
	const [isCountdownActive, setIsCountdownActive] = useState(false);

	const minutes = Math.floor(counter / 60);
	const seconds = counter % 60;

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	function startCountdown() {
		setIsCountdownActive(true);
	}

	useEffect(() => {
		if(isCountdownActive && counter > 0){
			setTimeout(() => {
				setCounter(counter - 1);
			}, 1000)
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

			<button 
				type="button"
				className={styles.Countdown__button}
				onClick={startCountdown}
			>
				{isCountdownActive
				? "Pausar"
				: "Iniciar"
				}
			</button>
		</div>
	)
}
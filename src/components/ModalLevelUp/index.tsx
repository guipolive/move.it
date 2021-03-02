import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './ModalLevelUp.module.css';

export function ModalLevelUp() {
	const {level, closeModalLevelUp} = useContext(ChallengesContext);
	
	return(
		<div className={styles.ModalLevelUp__overlay} >
			<div className={styles.ModalLevelUp__container}>
				<header>{level}</header>

				<strong>Parabéns</strong>
				<p>Você alcançou um novo level.</p>

				<button type="button" onClick={closeModalLevelUp}>
					<img src="/icons/close.svg" alt="Fechar modal"/>
				</button>
				
			</div>
		</div>
	)
}
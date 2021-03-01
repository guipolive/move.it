import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContexts';
import styles from './CompletedChallenges.module.css';

export function CompletedChallenges() {
	const {completedChallenges} = useContext(ChallengesContext);

	return(
		<div className={styles.CompletedChallenges}>
			<span>Desafios completos</span>
			<span>{completedChallenges}</span>
		</div>
	)
}
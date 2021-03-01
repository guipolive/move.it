import {createContext, useState, ReactNode} from 'react'
import challenges from '../challenges.json';

interface Challenge {
	type: 'body' | 'eye';
	description: string;
	amount: number;
}

interface ChallengesContextData {
	level: number;
	levelUp: () => void;
	currentExperience: number;
	completedChallenges: number;
	startNewChallenge: () => void;
	experienceToNextLevel: number;
	activeChallenge: Challenge;
	resetChallenge: () => void;
}

interface ChallengeProviderProps {
	children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}) {
	const [level, setLevel] = useState(1); // valor padrão
	const [currentExperience, setCurrentExperience] = useState(30); // valor padrão
	const [completedChallenges, setCompletedChallenges] = useState(0); // valor padrão

	const [activeChallenge, setActiveChallenge] = useState(null);

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

	function startNewChallenge() {
		console.log('New Challenge');
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

		const challenge = challenges[randomChallengeIndex];

		setActiveChallenge(challenge);
	}

	function resetChallenge() {
		setActiveChallenge(null);
	}

	return(
		<ChallengesContext.Provider 
			value={{
				level,
				levelUp,
				currentExperience,
				completedChallenges,
				startNewChallenge,
				activeChallenge,
				resetChallenge,
				experienceToNextLevel
			}}
		>
			{children}
		</ChallengesContext.Provider>
	)
}
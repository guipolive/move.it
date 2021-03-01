import {createContext, useState, ReactNode, useEffect} from 'react'
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
	completeChallenge: () => void;
}

interface ChallengeProviderProps {
	children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}) {
	const [level, setLevel] = useState(1); // valor padrão
	const [currentExperience, setCurrentExperience] = useState(0); // valor padrão
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

	function completeChallenge() {
		if(!activeChallenge){
			return;
		}

		const {amount} = activeChallenge;
		let finalExperience = currentExperience + amount;

		if(finalExperience >= experienceToNextLevel) {
			finalExperience = finalExperience - experienceToNextLevel;
			levelUp();
		}

		setCurrentExperience(finalExperience);
		setActiveChallenge(null);
		setCompletedChallenges(completedChallenges + 1);
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
				experienceToNextLevel,
				completeChallenge
			}}
		>
			{children}
		</ChallengesContext.Provider>
	)
}
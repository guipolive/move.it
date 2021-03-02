import {createContext, useState, ReactNode, useEffect} from 'react'
import challenges from '../challenges.json';
import Cookies from 'js-cookie';

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
	level: number;
  currentExperience: number;
  completedChallenges: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children, ...rest}) {

	const [level, setLevel] = useState(rest.level ?? 1); // valor padrão
	const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0); // valor padrão
	const [completedChallenges, setCompletedChallenges] = useState(rest.completedChallenges ?? 0); // valor padrão

	const [activeChallenge, setActiveChallenge] = useState(null);

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

	useEffect(() => {
		Cookies.set('level', level.toString());
		Cookies.set('currentExperience', currentExperience.toString());
		Cookies.set('completedChallenges', completedChallenges.toString());
	}, [level, currentExperience, completedChallenges])

	useEffect(() => {
		Notification.requestPermission;
	}, [])

  function levelUp() {
    setLevel(level + 1);
  }

	function startNewChallenge() {
		console.log('New Challenge');
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

		const challenge = challenges[randomChallengeIndex];

		setActiveChallenge(challenge);

		new Audio('/notification.mp3').play();

		if(Notification.permission === 'granted') {
			new Notification('Novo desafio 🎉', {
				body: `Valendo ${challenge.amount}xp!`
			})
		}
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
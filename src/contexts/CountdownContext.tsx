import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContexts";

interface CountdownContextData {
	minutes: number;
	seconds: number;
	hasFinished: boolean;
	isCountdownActive: boolean;
	startCountdown: () => void;
	resetCountdown: () => void;
}

interface CountdownProviderProps {
	children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

const time = 0.05*60;

export function CountdownProvider({ children }: CountdownProviderProps) {
	const {startNewChallenge} = useContext(ChallengesContext);

	const [counter, setCounter] = useState(0.1 * 60);
	const [isCountdownActive, setIsCountdownActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);

	const minutes = Math.floor(counter / 60);
	const seconds = counter % 60;

	function startCountdown() {
		setIsCountdownActive(true);
		setHasFinished(false);
	}

	function resetCountdown() {
		clearTimeout(countdownTimeout);
		setIsCountdownActive(false);
		setHasFinished(false);
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
		<CountdownContext.Provider value={{
			minutes,
			seconds,
			hasFinished,
			isCountdownActive,
			startCountdown,
			resetCountdown
		}} >
			{children}
		</CountdownContext.Provider>
	)
}
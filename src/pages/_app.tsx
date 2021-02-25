import '../styles/global.css'

import {ChallengesContext} from '../contexts/ChallengesContexts';
import { useState } from 'react';



function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1); // valor padrão

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider value={{level, levelUp}} >
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp

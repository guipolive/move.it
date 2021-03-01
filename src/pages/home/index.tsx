import { CompletedChallenges } from '../../components/CompletedChallenges';
import { Countdown } from '../../components/Countdown';
import {ExperienceBar} from '../../components/ExperienceBar/ExperienceBar';
import { Profile } from '../../components/Profile';

import styles from './home.module.css';

import Head from 'next/head';
import { ChallengeBox } from '../../components/ChallengeBox';
import React from 'react';

import { CountdownProvider } from '../../contexts/CountdownContext';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <div className={styles.container} >
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </>
  )
}

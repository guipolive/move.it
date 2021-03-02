import { CompletedChallenges } from '../../components/CompletedChallenges';
import { Countdown } from '../../components/Countdown';
import {ExperienceBar} from '../../components/ExperienceBar/ExperienceBar';
import { Profile } from '../../components/Profile';

import styles from './home.module.css';

import Head from 'next/head';
import {GetServerSideProps} from 'next';
import { ChallengeBox } from '../../components/ChallengeBox';
import React from 'react';

import { CountdownProvider } from '../../contexts/CountdownContext';
import { ChallengesProvider } from '../../contexts/ChallengesContext';

export default function Home(props) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      completedChallenges={props.completedChallenges}
    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const {level, currentExperience, completedChallenges} = context.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges)
    }
  }
}

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession, signOut } from 'next-auth/client';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { Sidebar } from '../components/Sidebar';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import withAuth from '../utils/withAuth';

import { prisma } from '../prisma';

import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience: number;
}

function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      totalExperience={props.totalExperience}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />
        <Sidebar />

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

export default withAuth(Home);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    ctx.res.statusCode = 403;
    return { 
      props: {} 
    }
  }

  const userAccessToken = await prisma.session.findUnique({
    where: {
      accessToken: session.accessToken
    }
  });

  const user = await prisma.user.findUnique({
    where: {
      id: userAccessToken.userId
    }
  });

  return {
    props: {
      session,
      level: user.level,
      currentExperience: user.currentExperience,
      challengesCompleted: user.challengesCompleted
    }
  }
}
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from 'next/head';

import { Sidebar } from "../components/Sidebar";
import { UserItem } from "../components/UserItem";

import { prisma } from '../prisma';
import { User } from '@prisma/client';

import withAuth from "../utils/withAuth";

import styles from "../styles/pages/Leaderboard.module.css";

interface LeaderboardProps {
  users: User[];
} 

function Leaderboard({ users }: LeaderboardProps) {  
  return (
    <div className={styles.leaderboardContainer}>
      <Head>
        <title>Ranking | move.it</title>
      </Head>
      
      <Sidebar />

      <strong>Leaderboard</strong>

      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Usuário</th>
            <th>Desafios</th>
            <th>Experiência</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <UserItem 
                key={index}
                position={index}
                name={user.name}
                image={user.image}
                level={user.level}
                challengesCompleted={user.challengesCompleted}
                totalExperience={user.totalExperience}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default withAuth(Leaderboard);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    ctx.res.statusCode = 403;
    return { 
      props: {
        users: []
      } 
    }
  }

  const users = await prisma.user.findMany({
    orderBy: { totalExperience: 'desc' }
  });

  return {
    props: {
      users,
      session
    }
  }
}
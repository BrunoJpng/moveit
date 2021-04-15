import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from "next-auth/client";

import { FaGithub } from 'react-icons/fa';

import styles from '../styles/pages/Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <img src="simbolo.svg" alt="Símbolo" />
      
      <div>
        <img src="logo.svg" alt="Move.it logo" />
        <strong>Bem-vindo</strong>

        <button onClick={() => signIn("github")}>
          <FaGithub size={50} />
          Faça login com seu Github para começar
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
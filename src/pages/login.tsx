import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from "next-auth/client";

import { Input } from "../components/Input";

import styles from '../styles/pages/Login.module.css'

export default function Login() {
  function handleLogin(value: string) {
    signIn(
      "github",
      { callbackUrl: `${process.env.NEXTAUTH_URL}` },
      { login: value }
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <img src="simbolo.svg" alt="Símbolo" />
      
      <div>
        <img src="logo.svg" alt="Move.it logo" />
        <strong>Bem-vindo</strong>

        <p>
          <img src="icons/github.svg" alt="Github logo" />
          Faça login com seu Github para começar
        </p>

        <Input handleSubmit={(value) => handleLogin(value)} />
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
    props: {
      session,
    }
  }
}
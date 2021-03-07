import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession, Session, signIn } from "next-auth/client";

import { Input } from "../components/Input";

import styles from '../styles/pages/Login.module.css'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

interface LoginProps {
  session: Session;
}

export default function Login({ session }: LoginProps) {
  const router = useRouter();

  useEffect(() => {
    if (session)
      router.push('/');
  }, [session]);

  function handleLogin(value: string) {
    if (!session) {
      signIn(
        "github",
        { callbackUrl: `${process.env.NEXTAUTH_URL}` },
        { login: value }
      );
    } else {
      router.push('/');
    }
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

  return {
    props: {
      session,
    }
  }
}
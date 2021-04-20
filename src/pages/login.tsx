import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from "next-auth/client";

import { FaGithub } from 'react-icons/fa';

import { Container, Main, Button } from '../styles/pages/Login';

export default function Login() {
  return (
    <Container>
      <Head>
        <title>Login | move.it</title>
      </Head>
      
      <Main>
        <img src="logo.svg" alt="Move.it logo" />
        <strong>Bem-vindo</strong>

        <Button onClick={() => signIn("github")}>
          <FaGithub size={50} />
          Faça login com seu Github para começar
        </Button>
      </Main>
    </Container>
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
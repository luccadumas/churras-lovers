// pages/index.tsx
import Head from 'next/head';
import Login from './Login';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Agenda de Churras - Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Login />
      </main>
    </>
  );
};

export default Home;

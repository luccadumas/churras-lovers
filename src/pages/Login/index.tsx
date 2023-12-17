// pages/login.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import * as S from './styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (
    <S.LoginContainer>
      <Head>
        <title>Agenda de Churras - Login</title>
      </Head>
      <Header />
      <S.Form>
        <S.FormGroup>
          <S.Label>
            Login
          </S.Label>
          <S.Input type="email" placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>
            Senha
          </S.Label>
          <S.Input type="password" placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        </S.FormGroup>
        <S.Button type="button" onClick={handleLogin}>
          Entrar
        </S.Button>
      </S.Form>
      <Footer />
    </S.LoginContainer>
  );
};

export default Login;

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import * as S from './styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import { customToast } from '@/utils/customToast';

const Login: React.FC = () => {
  const router = useRouter();
  const { login, verifyUserLoggedIn, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      if (response.jwt) {
        router.push('/events');
      }
    } catch (error) {
      customToast('Erro ao fazer login', 'error');
    }
  };

  useEffect(() => {
    const response = verifyUserLoggedIn();
  }, []);

  return (
    <S.LoginContainer>
      <Head>
        <title>Agenda de Churras - Login</title>
      </Head>
      <Header />
      <S.Form onSubmit={handleLogin}>
        <S.FormGroup>
          <S.Label>
            Login
          </S.Label>
          <S.Input type="email" placeholder='e-mail' value={email} required onChange={(e) => setEmail(e.target.value)} />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>
            Senha
          </S.Label>
          <S.Input type="password" placeholder='senha' value={password} required onChange={(e) => setPassword(e.target.value)} />
        </S.FormGroup>
        <S.Submit type='submit' >
          {loading ? 'Carregando...' : 'Entrar'}
        </S.Submit>
        <S.StyledLink href="/register">
          Primeiro acesso
        </S.StyledLink>
      </S.Form>
      <Footer />
    </S.LoginContainer>
  );
};

export default Login;

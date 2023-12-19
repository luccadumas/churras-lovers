import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  LoginContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Submit,
  StyledLink,
} from '../../styles/loginStyles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import { customToast } from '@/utils/customToast';

interface LoginProps {
  jwt: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const { login, verifyUserLoggedIn, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: LoginProps = await login(email, password);
      if (response.jwt) {
        router.push('/events');
      }
    } catch (error) {
      customToast('Erro ao fazer login', 'error');
    }
  };

  useEffect(() => {
    verifyUserLoggedIn();
  }, []);

  return (
    <LoginContainer>
      <Head>
        <title>Agenda de Churras - Login</title>
      </Head>
      <Header />
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label>
            Login
          </Label>
          <Input type="email" placeholder='e-mail' value={email} required onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>
            Senha
          </Label>
          <Input type="password" placeholder='senha' value={password} required onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Submit type='submit' >
          {loading ? 'Carregando...' : 'Entrar'}
        </Submit>
        <StyledLink href="/register">
          Primeiro acesso
        </StyledLink>
      </Form>
      <Footer />
    </LoginContainer>
  );
};

export default Login;

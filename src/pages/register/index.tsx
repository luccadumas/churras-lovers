// pages/register.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import * as S from './styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { customToast } from '@/utils/customToast';
import api from '@/services/api';
import { useRouter } from 'next/navigation';

const Register: React.FC = () => {
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      customToast('As senhas não conferem', "error");
      return;
    }

    if (password.length < 8) {
      customToast('A senha deve ter pelo menos 8 caracteres', "error");
      return;
    }

    api.post('/api/auth/local/register', {
      email,
      username: email,
      password,
    }).then((response) => {
      router.push('/login');
      customToast('Usuário registrado com sucesso', "success");

    }).catch((err) => {
      customToast('Erro ao registrar o usuário', "error");
      console.error(err);
    });
  };

  return (
    <S.RegisterContainer>
      <Head>
        <title>Agenda de Churras - Register</title>
      </Head>
      <Header />
      <S.Form onSubmit={handleRegister}>
        <S.FormGroup>
          <S.Label>
            Usuário
          </S.Label>
          <S.Input required type="email" placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>
            Senha
          </S.Label>
          <S.Input required type="password" placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>
            Confirmação de senha
          </S.Label>
          <S.Input required type="password" placeholder='confirmação de senha' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </S.FormGroup>
        <S.Submit type='submit'>
          Registrar
        </S.Submit>
      </S.Form>
      <Footer />
    </S.RegisterContainer>
  );
};

export default Register;

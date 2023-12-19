import React, { useState } from 'react';
import Head from 'next/head';
import {
  RegisterContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Submit,
  StyledLink,
} from '../../styles/registerStyles';
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

    api.post('auth/local/register', {
      email,
      username: email,
      password,
    }).then((response) => {
      router.push('/login');
      customToast('Usuário registrado com sucesso', "success");

    }).catch((err) => {
      console.log(err)
      customToast('Erro ao registrar o usuário', "error");
    });
  };

  return (
    <RegisterContainer>
      <Head>
        <title>Agenda de Churras - Register</title>
      </Head>
      <Header />
      <Form onSubmit={handleRegister}>
        <FormGroup>
          <Label>
            Usuário
          </Label>
          <Input required type="email" placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>
            Senha
          </Label>
          <Input required type="password" placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>
            Confirmação de senha
          </Label>
          <Input required type="password" placeholder='confirmação de senha' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </FormGroup>
        <Submit type='submit'>
          Registrar
        </Submit>
        <StyledLink href="/login">
          Já tenho uma conta
        </StyledLink>
      </Form>
      <Footer />
    </RegisterContainer>
  );
};

export default Register;

// components/Header.tsx
import React from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import { customToast } from '@/utils/customToast';

const Header: React.FC = () => {

  const router = useRouter();
  const { logout, user } = useAuth();

  console.log(user, "AQUI USER")

  const handleLogout = async () => {
    console.log("AQUI")

    try {
      const response = await logout();
      console.log(response, "AQUI")
    } catch (error) {
      console.error('Error during login:', error);
      customToast('Erro ao fazer login', 'error');
    }
  };

  return (
    <S.Container>
      <S.Title>Agenda de Churras</S.Title>
      {user && (<S.Logout onClick={() => handleLogout()}>Sair</S.Logout>)}
    </S.Container>
  );
};

export default Header;

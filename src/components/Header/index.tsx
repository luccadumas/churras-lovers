import React from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import { customToast } from '@/utils/customToast';

const Header: React.FC = () => {

  const router = useRouter();
  const { logout, user } = useAuth();

  const handleLogout = async () => {

    try {
      const response = await logout();
    } catch (error) {
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

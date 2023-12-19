import React, { useEffect, ReactNode } from 'react';
import { useAuth } from '@/contexts/auth';
import * as S from './styles';

const AuthChecker: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { verifyUserLoggedIn, loading } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      await verifyUserLoggedIn();
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <S.LoadingContainer>
        <S.Spinner />
      </S.LoadingContainer>
    );
  }

  return <>{children}</>;
};

export default AuthChecker;

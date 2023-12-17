// components/AuthChecker.tsx
import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/auth';
import Router from 'next/router';

const AuthChecker: React.FC = ({ children }) => {
  const { verifyUserLoggedIn, loading } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      await verifyUserLoggedIn();
    };

    checkAuth();
  }, []);

  if (loading) {
    // Você pode mostrar um componente de carregamento enquanto verifica a autenticação
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthChecker;

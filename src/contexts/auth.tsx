import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import Router from 'next/router';

import api from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginResponse {
  jwt: string;
}

interface UserData {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (email: string, password: string) => Promise<LoginResponse>;
  loading: boolean;
  verifyUserLoggedIn: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await api.get('users/me', { headers: { Authorization: `Bearer ${token}` } });
        if (user) setUser(user);
      }
      setLoading(false);
    }

    loadUserFromCookies();
  }, []);

  const login = async (identifier: string, password: string) => {
    setLoading(true);
    try {
      const { data: responseData } = await api.post('auth/local', { identifier, password });

      if (responseData && responseData.jwt && responseData.user) {
        Cookies.set('user', JSON.stringify(responseData.user), { expires: 60 });
        Cookies.set('token', responseData.jwt, { expires: 60 });
        api.defaults.headers.Authorization = `Bearer ${responseData.jwt}`;
        setUser(responseData.user);
      }

      return responseData;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };


  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    setUser(null);
    delete api.defaults.headers.Authorization;
    Router.push('/login');

    return true;
  };

  const verifyUserLoggedIn = async () => {
    const responseData = Cookies.get('user');
    if (!responseData) {
      Router.push('/login');
      return;
    }
    const responseDataJson = JSON.parse(responseData as string)
    if (responseDataJson) {
      setUser(responseDataJson);
      api.defaults.headers.Authorization = `Bearer ${responseDataJson.jwt}`;
      Router.push('/events');
    } else {
      setUser(null);
      Router.push('/login');
    }
    setLoading(false);

    return responseData;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, verifyUserLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import Router from 'next/router';

//api aqui é uma instância axios que tem a baseURL configurada de acordo com o env.
import api from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: any; // Defina o tipo do usuário conforme necessário
  login: (email: string, password: string) => Promise<void>;
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
      const user = Cookies.get('user');
      const jwt = user?.jwt;
      if (jwt) {
        console.log("Got a jwt in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${jwt}`;
        const { data: user } = await api.get('users/me', { headers: { Authorization: `Bearer ${jwt}` } });
        if (user) setUser(user);
      }
      setLoading(false);
    }

    loadUserFromCookies();
  }, []);

  const login = async (identifier: string, password: string) => {
    try {
      const { data: responseData } = await api.post('auth/local', { identifier, password });

      if (responseData && responseData.jwt && responseData.user) {
        console.log("Got token");
        Cookies.set('user', JSON.stringify(responseData.user), { expires: 60 });
        api.defaults.headers.Authorization = `Bearer ${responseData.jwt}`;
        setUser(responseData.user);
        console.log("Got user", responseData.user);
      }

      return responseData;
    } catch (error) {
      console.error('Error during login:', error);
      throw error; // Rejeita o erro para tratamento no componente de login
    }
  };


  const logout = () => {
    Cookies.remove('user');
    setUser(null);
    delete api.defaults.headers.Authorization;
    Router.push('/login');

    return true;
  };

  const verifyUserLoggedIn = async () => {
    const responseData = Cookies.get('user');
    console.log(responseData, "AQUI 21231213123")
    if (responseData) {
      console.log(user, "Got a user in the cookies, let's see if it is valid");
      api.defaults.headers.Authorization = `Bearer ${responseData.jwt}`;
      if (user) {
        setUser(user)
        Router.push('/events');
      }
    } else {
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

import loginApi from "@/services/api/login-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@/services/token-services";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { createContext } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (accessToken: string) => {
      setAccessToken(accessToken);
      setIsAuthenticated(true);
    },
    onError: () => {
      setIsAuthenticated(false);
    },
  });

  const login = (username: string, password: string) => {
    mutation.mutate({ username, password });
  };

  const logout = () => {
    removeAccessToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

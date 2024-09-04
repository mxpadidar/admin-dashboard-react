import AuthContext from "@/context/auth-context";
import loginApi from "@/services/api/login-api";
import { TokenModel } from "@/services/models";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access-token");
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (token: TokenModel) => {
      localStorage.setItem("access-token", token.accessToken);
      localStorage.setItem("refresh-token", token.refreshToken);
      setIsAuthenticated(true);
    },
    onError: () => {
      setIsAuthenticated(false);
    },
  });

  const login = (username: string, password: string): void => {
    mutation.mutate({ username, password });
  };

  const logout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

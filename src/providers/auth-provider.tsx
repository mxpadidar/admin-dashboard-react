import AuthContext from "@/context/auth-context";
import { loginService } from "@/services/login-service";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const mutation = useMutation(loginService);

  const loginMutation = useMutation(loginService, {
    onSuccess: (token: string) => {
      localStorage.setItem("access-token", token);
      setIsAuthenticated(true);
    },
    onError: () => {
      setIsAuthenticated(false);
    },
  });

  const login = (username: string, password: string) => {
    loginMutation.mutate({ username, password });
  };

  const logout = () => {
    localStorage.removeItem("access-token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import useLoginApi, { LoginApiProps } from "@/services/api/login-api";
import useRegisterApi, {
  RegisterApiProps,
  RegisterApiResponse,
} from "@/services/api/register-user-api";
import { getAccessToken, removeAccessToken } from "@/services/token-services";
import { useEffect, useState } from "react";

import { createContext } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: LoginApiProps) => void;
  register: (data: RegisterApiProps) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const registerMutation = useRegisterApi({
    successFn: (data: RegisterApiResponse) => {
      console.log(data);
      setIsAuthenticated(true);
    },
    errorFn: (error: unknown, variables: RegisterApiProps) => {
      console.log(error);
      console.log(variables);
    },
  });

  const loginMutation = useLoginApi({
    successFn: (data) => {
      console.log(data);
      setIsAuthenticated(true);
    },
    errorFn: (error, variables) => {
      console.log(error);
      console.log(variables);
    },
  });

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (data: LoginApiProps) => {
    loginMutation.mutate(data);
  };

  const register = (data: RegisterApiProps) => {
    registerMutation.mutate(data);
  };

  const logout = () => {
    removeAccessToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

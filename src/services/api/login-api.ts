import axiosInstance from "@/services/axios-instance";
import { useMutation } from "@tanstack/react-query";

export type LoginApiProps = {
  username: string;
  password: string;
};

type LoginResponse = {
  access_token: string;
  token_type: string;
};

interface HookProps {
  successFn: (data: LoginResponse) => void;
  errorFn: (error: unknown, variables: LoginApiProps) => void;
}

const useLoginApi = ({ successFn, errorFn }: HookProps) => {
  const mutation = useMutation({
    mutationFn: async (data: LoginApiProps) => {
      const response = await axiosInstance.post("/login", { ...data });
      return response.data;
    },
    onSuccess: (data: LoginResponse) => successFn(data),
    onError: (error, variables) => errorFn(error, variables as LoginApiProps),
  });
  return mutation;
};

export default useLoginApi;

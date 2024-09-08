import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axios-instance";

export type RegisterApiProps = {
  username: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
};

export type RegisterApiResponse = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
};

interface HookProps {
  successFn: (data: RegisterApiResponse) => void;
  errorFn: (error: unknown, variables: RegisterApiProps) => void;
}

const useRegisterApi = ({ successFn, errorFn }: HookProps) => {
  const mutation = useMutation({
    mutationFn: async (data: RegisterApiProps) => {
      const response = await axiosInstance.post("/register", { ...data });
      return response.data;
    },
    onSuccess: (data: RegisterApiResponse) => successFn(data),
    onError: (error, context) => errorFn(error, context as RegisterApiProps),
  });
  return mutation;
};

export default useRegisterApi;

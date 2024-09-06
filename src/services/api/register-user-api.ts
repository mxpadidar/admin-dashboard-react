import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axios-instance";

export type RegisterUserRequest = {
  username: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
};

export type RegisterUserResponse = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
};

const useRegisterUserApi = ({
  username,
  password,
  password_confirm,
  first_name,
  last_name,
}: RegisterUserRequest) => {
  const mutation = useMutation({
    mutationFn: () =>
      axiosInstance.post("/register", {
        username,
        password,
        password_confirm,
        first_name,
        last_name,
      }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return mutation;
};

export default useRegisterUserApi;

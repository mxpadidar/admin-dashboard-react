import axiosInstance from "@/services/axios-instance";

type LoginResponse = {
  access_token: string;
  token_type: string;
};

type LoginApiProps = {
  username: string;
  password: string;
};

const loginApi = async ({
  username,
  password,
}: LoginApiProps): Promise<string> => {
  const response = await axiosInstance.post<LoginResponse>("/login", {
    username,
    password,
  });
  return response.data.access_token;
};

export default loginApi;

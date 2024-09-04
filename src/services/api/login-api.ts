import axiosInstance from "@/services/axios-instance";
import { TokenModel } from "@/services/models";

type LoginApiProps = {
  username: string;
  password: string;
};

const loginApi = async ({
  username,
  password,
}: LoginApiProps): Promise<TokenModel> => {
  const response = await axiosInstance.post<TokenModel>("/login", {
    username,
    password,
  });
  return response.data;
};

export default loginApi;

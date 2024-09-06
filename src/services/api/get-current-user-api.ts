import User from "@/models/user-model";
import axiosInstance from "@/services/axios-instance";

type GetCurrentUserResponse = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
};

const getCurrentUser = async (): Promise<User> => {
  const response = await axiosInstance.get<GetCurrentUserResponse>(
    "/users/current"
  );
  const user: User = {
    id: response.data.id,
    username: response.data.username,
    firstName: response.data.first_name,
    lastName: response.data.last_name,
  };

  return user;
};

export default getCurrentUser;

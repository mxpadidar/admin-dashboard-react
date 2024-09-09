import { User } from "@/types/models";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios-instance";

type apiResponseModel = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
};

const useGetCurrentUser = () => {
  const { data, error, isError } = useQuery({
    queryKey: ["users", "current"],
    queryFn: async () => {
      const response = await axiosInstance.get<apiResponseModel>(
        "/users/current"
      );
      return response.data;
    },
  });

  if (isError) {
    console.error(error);
  }

  const user = {
    id: data?.id,
    username: data?.username,
    firstName: data?.first_name,
    lastName: data?.last_name,
  };

  return user as User;
};

export default useGetCurrentUser;

import getCurrentUser from "@/services/api/get-current-user-api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ProfilePage: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">پروفایل</h1>
      <div className="flex gap-5 mb-3 pb-3 border-b">
        <span className="font-bold text-lg">نام کاربری: </span>
        <span className="ml-2 text-lg">{data.username}</span>
      </div>
      <div className="flex gap-5 mb-3 pb-3 border-b">
        <span className="font-bold text-lg">نام: </span>
        <span className="ml-2 text-lg">{data.firstName}</span>
      </div>
      <div className="flex gap-5">
        <span className="font-bold text-lg">نام خانوادگی: </span>
        <span className="ml-2 text-lg">{data.lastName}</span>
      </div>
    </div>
  );
};

export default ProfilePage;

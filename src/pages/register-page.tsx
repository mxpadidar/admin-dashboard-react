import useAuth from "@/hooks/use-auth";
import { RegisterApiProps } from "@/services/api/register-user-api";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const { isAuthenticated, register: registerFn } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<RegisterApiProps>({
    defaultValues: {
      username: "",
      password: "password",
      password_confirm: "password",
      first_name: "mohsen",
      last_name: "padidar",
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border">
      <form onSubmit={handleSubmit((data) => registerFn(data))}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            نام کاربری
          </label>
          <input
            {...register("username")}
            className="mt-1 block w-full px-3 py-2 border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            رمز عبور
          </label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 block w-full px-3 py-2 border"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password_confirm"
            className="block text-sm font-medium"
          >
            تکرار رمز عبور
          </label>
          <input
            type="password"
            {...register("password_confirm")}
            className="mt-1 block w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="first_name" className="block text-sm font-medium">
            نام
          </label>
          <input
            {...register("first_name")}
            className="mt-1 block w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="block text-sm font-medium">
            نام خانوادگی
          </label>
          <input
            {...register("last_name")}
            className="mt-1 block w-full px-3 py-2 border"
          />
        </div>
        <input
          type="submit"
          value={"ثبت نام"}
          className="w-full py-2 px-4 border text-sm font-medium cursor-pointer bg-blue-500 text-white"
        />
      </form>
    </div>
  );
};

export default RegisterPage;

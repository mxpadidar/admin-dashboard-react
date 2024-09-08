import useAuth from "@/hooks/use-auth";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type LoginFormInputs = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border">
      <form onSubmit={handleSubmit((data) => login(data))}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            نام کاربری
          </label>
          <input
            value={"string"}
            {...register("username")}
            className="mt-1 block w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium">
            رمز عبور
          </label>
          <input
            value={"string"}
            {...register("password")}
            type="password"
            className="mt-1 block w-full px-3 py-2 border"
          />
        </div>
        <input
          type="submit"
          value={"ورود"}
          className="w-full py-2 px-4 border text-sm font-medium cursor-pointer bg-blue-500 text-white"
        />
      </form>
    </div>
  );
};

export default LoginPage;

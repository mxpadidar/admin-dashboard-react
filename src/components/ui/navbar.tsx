import Button from "@/components/ui/button";
import useAuth from "@/hooks/use-auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="container mx-auto h-16 flex items-center justify-between">
      <div className="flex gap-5">
        <Link to="/">صفحه اصلی</Link>
        <Link to="/profile">پروفایل</Link>
      </div>

      {isAuthenticated ? (
        <Button onClick={() => logout()}>خروج</Button>
      ) : (
        <div className="flex gap-3">
          <Button onClick={() => navigate("/login")}>ورود</Button>
          <Button onClick={() => navigate("/register")}>ثبت نام</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

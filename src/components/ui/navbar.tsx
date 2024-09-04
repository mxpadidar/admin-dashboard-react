import Button from "@/components/ui/button";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="container mx-auto h-16 flex items-center justify-between px-6">
      <div className="flex gap-5">
        <Link to="/">صفحه اصلی</Link>
        <Link to="/profile">پروفایل</Link>
      </div>

      <div>
        <Button onClick={() => navigate("/login")}>ورود</Button>
      </div>
    </nav>
  );
};

export default Navbar;

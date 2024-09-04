import Header from "@/components/ui/header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layouts: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Layouts;

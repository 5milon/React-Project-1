import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="h-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet />
      </div>

      <div >
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

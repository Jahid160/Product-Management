import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col max-w-7xl mx-auto ">
      <Navbar />

      <main className="grow w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;

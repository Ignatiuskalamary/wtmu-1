import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import WtmuSidebar from "../../componentes/admin/WtmuSidebar";
import UserProfileDropdown from "../../componentes/UserProfileDropdown";

const WtmuLayout: React.FC = () => {
  const navigate = useNavigate();

  // const logout = () => {
  //   // Add any logout logic here (clear tokens, etc.)
  //   navigate("/");
  // };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between py-2 px-4 sm:px-12 border-b border-gray-200 bg-white">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img
            src={assets.logo}
            alt="World Tamil Music University Logo"
            className="w-10 sm:w-16 md:w-20 lg:w-24 transition-all duration-300 hover:scale-105"
          />
          <h1 className="ml-4 text-xl sm:text-3xl md:text-4xl text-green-700 font-semibold">
            World Tamil Music University
          </h1>
        </div>

        {/* <button
          onClick={logout}
          className="text-sm px-4 sm:px-6 py-1 sm:py-2 bg-green-700 text-yellow-300 rounded-full hover:bg-green-600 transition-colors duration-300"
          aria-label="Logout"
        >
          Logout
        </button> */}
        <UserProfileDropdown />
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 bg-white">
          <WtmuSidebar />
        </aside>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default WtmuLayout;

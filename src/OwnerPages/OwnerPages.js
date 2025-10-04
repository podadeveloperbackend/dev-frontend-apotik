import React, { useState } from "react";
import Sidebar from "../components/SidebarAdmin/SidebarAdmin";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/AuthContext";
import { AiFillDashboard, AiOutlineTeam } from "react-icons/ai";
const OwnerPages = () => {
  const [isWide, setIsWide] = useState(true);
  const { pathname } = useLocation();
  const { user, isLoading } = useAuthContext();

    const routes = [
    {
      title: "Dashboard",
      icon: <AiFillDashboard size={25} />,
      path: "/owner/dashboard",
    },
    {
      title: "User",
      icon: <AiOutlineTeam size={25} />,
      path: "/owner/user",
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (user?.role !== "owner") {
    return <Navigate to="/" />;
  }

  if (pathname === "/owner") {
    return <Navigate to="/owner/dashboard" />;
  }
  return (
    <div className="vh-100 p-2">
      <div className="h-100 container-fluid d-flex gap-3">
        {/* Sidebar */}
        <Sidebar isWide={isWide} setIsWide={setIsWide} routes={routes}/>

        {/* Main Content */}
        <main
          className={`flex-grow-1 ${
            !isWide ? "container-fluid" : "container-lg"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OwnerPages;

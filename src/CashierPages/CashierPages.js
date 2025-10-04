import React, { useState } from "react";
import Sidebar from "../components/SidebarAdmin/SidebarAdmin";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/AuthContext";

const CashierPages = () => {
  const [isWide, setIsWide] = useState(true);
  const { pathname } = useLocation();
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (user?.role !== "cashier") {
    return <Navigate to="/" />;
  }

    if (pathname === "/cashier") {
    return <Navigate to="/cashier/product" />;
  }
  return (
    <div className="vh-100 p-2">
      <div className="h-100 container-fluid d-flex gap-3">
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

export default CashierPages;

import React, { useState } from "react";
import Sidebar from "../components/SidebarAdmin/SidebarAdmin";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/AuthContext";
import {
  AiFillMedicineBox,
  AiOutlineShoppingCart,
  AiOutlineFileDone,
  AiOutlineTeam,
  AiFillDashboard,
  AiOutlineSliders
} from 'react-icons/ai';

const AdminPages = () => {
  const [isWide, setIsWide] = useState(true);
  const { pathname } = useLocation();
  const { user, isLoading } = useAuthContext();

    const routes = [
    {
      title: "Dashboard",
      icon: <AiFillDashboard size={25} />,
      path: "/admin/dashboard",
    },
    {
      title: "Slider",
      icon: <AiOutlineSliders size={25} />,
      path: "/admin/slider",
    },
    {
      title: "Produk",
      icon: <AiFillMedicineBox size={25} />,
      base: "admin",
      children: [
        {
          title: "Obat",
          path: "/admin/obat",
        },
        {
          title: "Kategori",
          path: "/admin/kategori-obat",
        },
      ],
    },
    {
      title: "Pemesanan",
      icon: <AiOutlineShoppingCart size={25} />,
      path: "/admin/pemesanan",
    },
    {
      title: "Supplier",
      icon: <AiOutlineFileDone size={25} />,
      path: "/admin/supplier",
    },
    {
      title: "User",
      icon: <AiOutlineTeam size={25} />,
      path: "/admin/user",
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (user?.role !== "admin") {
    return <Navigate to="/" />;
  }

    if (pathname === "/admin") {
    return <Navigate to="/admin/dashboard" />;
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

export default AdminPages;

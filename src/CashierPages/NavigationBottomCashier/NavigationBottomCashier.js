import React from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineHistory, AiOutlineUser } from "react-icons/ai";

const NavigationBottomCashier = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const pathIndex = pathname.split("/")[1];

  // 🚫 Sembunyikan navigasi berdasarkan role dan path
  if (
    (user?.role === "admin" && pathIndex === "admin") ||
    (user?.role === "user" && pathname === "/")
  ) {
    return null;
  }

  // 🔗 Daftar navigasi (pakai komponen ikon dari react-icons/ai)
  const navItems = [
    { path: "/home", label: "Home", icon: <AiFillHome size={24} /> },
    { path: "/riwayat", label: "Riwayat", icon: <AiOutlineHistory size={24} /> },
    { path: "/profile", label: "Profile", icon: <AiOutlineUser size={24} /> },
  ];

  return (
    <nav className="navbar fixed-bottom bg-primary border-top shadow-sm">
      <div className="container d-flex justify-content-around py-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`text-center text-decoration-none d-flex flex-column align-items-center ${
                isActive ? "text-white fw-bold" : "text-light"
              }`}
              style={{ fontSize: "13px" }}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavigationBottomCashier;

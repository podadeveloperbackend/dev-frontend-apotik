import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext/AuthContext";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, handleLogout } = useAuthContext();

  const toggleDropdown = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Inisial dari username
  const initial = user?.username?.charAt(0)?.toUpperCase() || "U";

  // Warna avatar statis (biru tua)
  const avatarColor = "#3F51B5";

  // Menu items dengan kondisi untuk Dashboard
  const menuItems = [
    {
      label: "Profil",
      icon: "far fa-user", // outline user
      to: "/profile",
    },
    ...(user?.role !== "user"
      ? [
          {
            label: "Dashboard",
            icon: "far fa-chart-bar", // outline chart
            to: `/${user?.role}`,
          },
        ]
      : []),
    {
      label: "Pesanan",
      icon: "far fa-clipboard", // outline clipboard
      to: "/order",
    },
  ];

  return (
    <div className="position-relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        className="p-0 border-0 bg-transparent"
        onClick={toggleDropdown}
        title={user?.username || "User"}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: avatarColor,
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
          }}
        >
          {initial}
        </div>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul
          className="dropdown-menu show"
          style={{
            position: "absolute",
            top: "110%",
            right: 0,
            zIndex: 999,
            minWidth: "200px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "4px",
            padding: "0.5rem 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="dropdown-item p-2 d-flex align-items-center gap-2"
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}

          {/* Divider */}
          <li>
            <hr className="dropdown-divider" />
          </li>

          {/* Logout Centered */}
          <li className="text-center">
            <button
              className="dropdown-item text-danger d-inline-flex align-items-center gap-2 justify-content-center"
              onClick={handleLogout}
              style={{ fontWeight: "500" }}
            >
              <i className="far fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;

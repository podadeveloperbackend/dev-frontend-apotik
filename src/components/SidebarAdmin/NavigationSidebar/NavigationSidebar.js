import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { isValidPath } from "../../../utils/isValidPath";

const NavigationSidebar = ({ icon, title, path, children, isWide }) => {
  const { pathname } = useLocation();
  const pathValid = isValidPath(children?.map((c) => c.path), pathname);
  const [open, setOpen] = React.useState(pathValid);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  // Kalau tidak ada children (link biasa)
  if (!children) {
    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          `nav-link d-flex align-items-center rounded p-2 ${
            isActive ? "bg-dark text-white" : "text-light"
          }`
        }
      >
        <div className="d-flex align-items-center gap-2">
          <div>{icon}</div>
          {isWide && <div>{title}</div>}
        </div>
      </NavLink>
    );
  }

  // Kalau ada children (dropdown menu)
  return (
    <div className="rounded transition position-relative text-white">
      {/* Parent Item */}
      <div
        className={`d-flex align-items-center p-2 ${
          pathValid ? "bg-dark text-white" : "text-light"
        } ${isWide ? "justify-content-between rounded-top" : "rounded"}`}
        onClick={toggleMenu}
        role="button"
      >
        <div className="d-flex align-items-center gap-2">
          <div>{icon}</div>
          {isWide && <div>{title}</div>}
        </div>
        {isWide && <div>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>}
      </div>

      {/* Children */}
      {open && (
        <div
          className= "d-flex flex-column gap-1 ps-4 pt-1"
        >
          {children.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center rounded p-2 ${
                  isActive ? "bg-light text-dark" : "text-white"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationSidebar;

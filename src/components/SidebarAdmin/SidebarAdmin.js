import { FaAngleRight, FaAngleLeft, FaSignOutAlt } from "react-icons/fa";
import NavigationSidebar from "./NavigationSidebar/NavigationSidebar";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

const Sidebar = ({ isWide, setIsWide, routes }) => {
  const { handleLogout } = useAuthContext();

  return (
    <aside className="position-relative">
      <div
        className={`bg-primary h-100 text-white rounded transition-all`}
        style={{
          width: isWide ? "250px" : "60px",
          padding: isWide ? "12px" : "6px",
        }}
      >
        <div className="position-sticky top-0 d-flex flex-column gap-3">
          {/* Toggle button */}
          <div className="d-flex">
            <button
              className={`btn btn-sm text-white ${isWide ? "ms-auto" : "mx-auto"}`}
              onClick={() => setIsWide(!isWide)}
            >
              {isWide ? <FaAngleLeft size={20} /> : <FaAngleRight size={20} />}
            </button>
          </div>

          {/* Routes */}
          <div className="d-flex flex-column gap-2">
            {routes.map((route, index) => (
              <NavigationSidebar
                key={index}
                title={route.title}
                icon={route.icon}
                path={route.path}
                children={route.children}
                base={route.base}
                isWide={isWide}
              />
            ))}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`btn btn-outline-light w-100 mt-3 d-flex align-items-center justify-content-center ${isWide ? "gap-2" : ""}`}
          >
            <FaSignOutAlt size={18} />
            {isWide && <span>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import React, { useEffect } from "react";
import { login, register, getProfile, logout } from "../../services/Auth/api";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  const handleLogin = async (username, password) => {
    try {
      const response = await login({ username, password });
      if (await response.status === 201) {
        setIsLogin(true);
        navigate("/");
        return response.status;
      }
    } catch (error) {
      console.error(error);
      return 401;
    }
  };

  const handleRegister = async ({ username, password }) => {
    try {
      const response = await register({ username, password });
      if (response.status === 201) {
        navigate("/login");
        return response.status;
      }
    } catch (error) {
      console.error(error);
      return 400;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLogin(false);
      setUser(null);
      navigate("/login");
    }
  };

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      try {
        const response = await getProfile();
        if (isMounted) {
          if (response?.status === 201) {
            setUser(response.user);
            setIsLogin(true);
          } else {
            setUser(null);
            setIsLogin(false);
          }
        }
      } catch (err) {
        if (isMounted) {
          setUser(null);
          setIsLogin(false);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    checkSession();

    return () => {
      isMounted = false;
    };
  }, [isLogin]);

  const value = {
    isLogin,
    user,
    isLoading,
    handleLogin,
    handleRegister,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

import api from "../apiMethod";

// LOGIN
export const login = async (data) => {
  return api.methodPost("/auth/login", data, { withCredentials: true });
};

// REGISTER
export const register = async (data) => {
  return api.methodPost("/auth/register", data, { withCredentials: true });
};

// GET PROFILE (cek session cookie / JWT valid)
export const getProfile = async () => {
  return api.methodGet("/auth/profile", { withCredentials: true });
};

// LOGOUT
export const logout = async () => {
  return api.methodPost("/auth/logout", {}, { withCredentials: true });
};

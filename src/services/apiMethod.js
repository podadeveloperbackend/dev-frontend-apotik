import axios from "axios";

const BACKENDAPI = process.env.BACKENDAPI || "http://localhost:5000";
// 🛠️ Buat instance axios
const api = axios.create({
  baseURL: BACKENDAPI,
  withCredentials: true, // penting untuk session cookie (HttpOnly)
});


// 🟢 Helper functions
const methodPost = async (url, data = {}, config = {}) => {
  return api.post(url, data, config).then((res) => res.data);
};

const methodGet = async (url, params = {}, config = {}) => {
  return api.get(url, { params, ...config }).then((res) => res.data);
};

const methodPut = async (url, data = {}, isFormData = false, config = {}) => {
  if (isFormData) {
    const formData = new FormData();
    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key].forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, data[key]);
      }
    }
    return api.put(url, formData, config).then((res) => res.data);
  }
  return api.put(url, data, config).then((res) => res.data);
};

const methodDelete = async (url, config = {}) => {
  return api.delete(url, config).then((res) => res.data);
};

export default { methodPost, methodGet, methodPut, methodDelete };

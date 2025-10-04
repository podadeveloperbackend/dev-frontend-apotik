import { toast } from "react-toastify";

export const showSuccessToast = (title) => {
  toast.success(title, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

import { toast } from "react-toastify";

export const showFailedToast = (title) => {
  toast.error(title,{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

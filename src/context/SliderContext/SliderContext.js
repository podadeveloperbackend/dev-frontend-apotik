import React, { useEffect } from "react";
import { createSlider, deleteSlider, getSlider } from "../../services/Slider/api";
import Swal from "sweetalert2";

const SlidersContext = React.createContext();

export const useSlidersContext = () => {
  return React.useContext(SlidersContext);
};

const SlidersContextProvider = ({ children }) => {
  const [sliders, setSliders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [foto, setFoto] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCloseModal = () => {
    setNumber("")
    setIsOpen(false)
  }

  const handleGetSliders = async () => {
    setIsLoading(true);
    try {
      const response = await getSlider();
      handleCloseModal()
      setSliders(response);
    } catch (error) {
      setSliders([]);
      ;
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSlider = async () => {
    try {
      const formData = new FormData();
      formData.append("number", number);
      for (let i = 0; i < foto.length; i++) {
        formData.append("image", foto[i]);
      }
      await createSlider(formData);
      handleGetSliders();
    } catch (error) {
      ;
    }
  };


  const handleDeleteSlider = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteSlider(id);
          handleGetSliders();
        } catch (error) {
          ;
        }
      }
    });
  };

  useEffect(() => {
    handleGetSliders();
  }, []);

  return (
    <SlidersContext.Provider
      value={{
        handleCloseModal,
        sliders,
        isLoading,
        number,
        setNumber,
        foto, 
        setFoto,
        handleGetSliders,
        handleAddSlider,
        handleDeleteSlider,
        setIsOpen,
        isOpen,
      }}
    >
      {children}
    </SlidersContext.Provider>
  );
};

export default SlidersContextProvider;

import React, { useEffect } from "react";
import { getUser, updateUser } from "../../services/User/api";

const UsersContext = React.createContext();

export const useUsersContext = () => {
  return React.useContext(UsersContext);
};

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isEdit, setIsEdit] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [role, setRole] = React.useState("guest");
  const [id, setId] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCloseModal = () => {
    setId(0);
    setIsEdit(false);
    setUsername("");
    setIsOpen(false);
  };

  const handleGetUsers = async () => {
    setIsLoading(true);
    try {
      const response = await getUser();
      handleCloseModal();
      setUsers(response);
    } catch (error) {
      setUsers([]);
      ;
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditUser = async () => {
    try {
      await updateUser(id, {role: role} );
      setIsEdit(false);
      handleGetUsers();
    } catch (error) {
      ;
    }
  };

  const handleOpenEditUser = (user) => {
    setIsEdit(true);
    setRole(user.role);
    setId(user.id);
    setIsOpen(true);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        handleCloseModal,
        handleOpenEditUser,
        users,
        isLoading,
        isEdit,
        username,
        id,
        handleGetUsers,
        handleEditUser,
        setUsername,
        setRole,
        role,
        setIsEdit,
        setId,
        setIsOpen,
        isOpen,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

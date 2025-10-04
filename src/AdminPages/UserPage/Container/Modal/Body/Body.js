import React from "react";
import Select from "react-select";
import { useUsersContext } from "../../../../../context/UsersContext/UsersContext";

const Body = () => {
  const { role, setRole } = useUsersContext();

  const roles = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "cashier", label: "Cashier" },
  ];

  return (
    <div className="d-flex flex-column gap-2">
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <Select
          id="role"
          value={roles.find((r) => r.value === role) || null} 
          options={roles}
          onChange={(selected) => setRole(selected.value)} 
          placeholder="Pilih Role"
          classNamePrefix="react-select"
        />
      </div>
    </div>
  );
};

export default Body;

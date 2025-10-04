import React from 'react'
import { IoMdAdd } from 'react-icons/io'

const ButtonAdd = ({ handleClick, title }) => {
  return (
    <button
      onClick={handleClick}
      className="btn-primary d-flex align-items-center gap-2 fw-bold"
      type="button"
    >
      <IoMdAdd />
      <span className="m-0">{title || "Tambah"}</span>
    </button>
  )
}

export default ButtonAdd

import React from 'react'
import { useSupplierContext } from '../../../../../context/SupplierContext/SupplierContext'

const Footer = () => {
  const { handleAddSupplier, handleEditSupplier, isEdit } = useSupplierContext()
  return (
    <div>
      <button onClick={isEdit ? handleEditSupplier : handleAddSupplier} className='btn-primary w-100'>{isEdit ? 'Edit Supplier' : 'Add Supplier'}</button>
    </div>
  )
}

export default Footer
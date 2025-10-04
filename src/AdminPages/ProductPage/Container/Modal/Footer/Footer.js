import React from 'react'
import { useProductContext } from '../../../../../context/ProductContext/ProductContext'

const Footer = () => {
  const { handleAddProduct, handleEditProduct, isEdit } = useProductContext()
  return (
    <div>
      <button onClick={isEdit ? handleEditProduct : handleAddProduct} className='btn-primary w-100'>{isEdit ? 'Edit Product' : 'Add Product'}</button>
    </div>
  )
}

export default Footer
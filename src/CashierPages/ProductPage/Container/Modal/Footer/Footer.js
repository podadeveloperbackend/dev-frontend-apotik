import React from 'react'
import { useOrderContext } from '../../../../../context/OrderContext/OrderContext'
const Footer = () => {
  const { handleCashCashier } = useOrderContext()
  return (
    <div>
      <button onClick={handleCashCashier} className='btn-primary w-100'>{"Simpan"}</button>
    </div>
  )
}

export default Footer
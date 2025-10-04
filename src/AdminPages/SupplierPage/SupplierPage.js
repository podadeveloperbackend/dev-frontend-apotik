import React from 'react'
import TableSelector from './Container/TableSelector/TableSelector'
import TableSupplier from './Container/Table/TableSupplier'
import Modal from './Container/Modal/Modal'
import SupplierContextProvider from '../../context/SupplierContext/SupplierContext'

const SupplierPage = () => {
  return (
    <SupplierContextProvider>
    <div>
      <div className='d-flex flex-column gap-2'>
        <TableSelector />
        <TableSupplier />
      </div>
    <Modal />
    </div>
    </SupplierContextProvider>
  )
}

export default SupplierPage
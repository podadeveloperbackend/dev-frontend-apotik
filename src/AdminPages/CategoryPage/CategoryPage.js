import React from 'react'
import TableCategory from './Container/Table/TableCategory'
import TableSelector from './Container/TableSelector/TableSelector'
import Modal from './Container/Modal/Modal'
import CategoriesContextProvider from '../../context/CategoriesContext/CategoriesContext'

const CategoryPage = () => {
  return (
    <CategoriesContextProvider>
      <div>
        <div className="d-flex flex-column gap-2">
          <TableSelector />
          <TableCategory />
        </div>
        <Modal />
      </div>
    </CategoriesContextProvider>
  )
}

export default CategoryPage

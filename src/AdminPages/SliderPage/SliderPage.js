import React from 'react'
import TableSlider from './Container/Table/TableSlider'
import TableSelector from './Container/TableSelector/TableSelector'
import Modal from './Container/Modal/Modal'
import SlidersContextProvider from '../../context/SliderContext/SliderContext'

const SliderPage = () => {
  return (
    <SlidersContextProvider>
      <div>
        <div className="d-flex flex-column gap-2">
          <TableSelector />
          <TableSlider />
        </div>
        <Modal />
      </div>
    </SlidersContextProvider>
  )
}

export default SliderPage

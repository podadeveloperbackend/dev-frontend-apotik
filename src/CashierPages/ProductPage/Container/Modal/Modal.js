import React from 'react'
import ModalComponent from '../../../../components/Modal/Modal'
import BodyModal from './Body/Body'
import FooterModal from './Footer/Footer'
import { useOrderContext } from '../../../../context/OrderContext/OrderContext'
const Modal = () => {
  const { isOpen, handleCloseModal } = useOrderContext()
  return (
    <ModalComponent isOpen={isOpen} onClose={handleCloseModal} title={"Input Tunai"} body={<BodyModal />} footer={<FooterModal />} />
  )
}

export default Modal
import React from 'react'
import ModalComponent from '../../../../components/Modal/Modal'
import BodyModal from './Body/Body'
import FooterModal from './Footer/Footer'
import { useSlidersContext } from '../../../../context/SliderContext/SliderContext'

const Modal = () => {
  const { isOpen, handleCloseModal } = useSlidersContext()

  return (
    <ModalComponent isOpen={isOpen} onClose={handleCloseModal} title="Slider" body={<BodyModal />} footer={<FooterModal />} />
  )
}

export default Modal
import React from 'react'
import ModalComponent from '../../../../components/Modal/Modal'
import BodyModal from './Body/Body'
import FooterModal from './Footer/Footer'
import { useUsersContext } from '../../../../context/UsersContext/UsersContext'

const Modal = () => {
  const { isOpen, handleCloseModal } = useUsersContext()

  return (
    <ModalComponent isOpen={isOpen} onClose={handleCloseModal} title="Edit User" body={<BodyModal />} footer={<FooterModal />} />
  )
}

export default Modal
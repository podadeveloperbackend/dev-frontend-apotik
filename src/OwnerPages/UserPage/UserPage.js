import React from 'react'
import TableUser from './Container/Table/TableUser'
import Modal from './Container/Modal/Modal'
import UsersContextProvider from '../../context/UsersContext/UsersContext'

const UserPage = () => {
  return (
    <UsersContextProvider>
    <div>
      <div className='d-flex flex-column gap-2'>
        <TableUser />
      </div>
      <Modal />
    </div>
    </UsersContextProvider>
  )
}

export default UserPage
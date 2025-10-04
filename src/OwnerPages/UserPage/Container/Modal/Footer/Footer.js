import React from 'react'
import { useUsersContext } from '../../../../../context/UsersContext/UsersContext'

const Footer = () => {
  const {handleEditUser } = useUsersContext()
  return (
    <div>
      <button onClick={handleEditUser} className='btn-primary w-100'>Edit User</button>
    </div>
  )
}

export default Footer
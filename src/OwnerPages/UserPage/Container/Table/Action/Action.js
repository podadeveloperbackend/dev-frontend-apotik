import React from 'react'
import ActionsButtonTable from '../../../../../components/ReusableTable/ActionButtonTable/ActionButtonTable'
import { useUsersContext } from '../../../../../context/UsersContext/UsersContext'

const Action = ({ value, row }) => {
  const { handleOpenEditUser } = useUsersContext()
  const actions = [
    {
      type: 'Edit',
      onClick: () => {
        handleOpenEditUser(row)
      }
    },
  ]
  return (
    <ActionsButtonTable actions={actions} />
  )
}

export default Action
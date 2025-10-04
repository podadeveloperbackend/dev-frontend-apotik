import React from 'react'
import ReusableTable from '../../../../components/ReusableTable/ReusableTable'
import Action from './Action/Action'
import { useUsersContext } from '../../../../context/UsersContext/UsersContext'
const TableUser = () => {
    const { users: data } = useUsersContext()
    const columns = [
        {
            accessor: 'username',
            header: 'Username'
        },
              {
            accessor: 'role',
            header: 'Role'
        },
        {
            header: 'Action',
            accessor: 'id',
            Cell: Action
        }
    ]
  return (
    <ReusableTable data={data} columns={columns} />
  )
}

export default TableUser
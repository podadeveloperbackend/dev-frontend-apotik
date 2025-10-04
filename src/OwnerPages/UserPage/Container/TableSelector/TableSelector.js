import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import ButtonAdd from '../../../../components/ButtonAdd/ButtonAdd'
import { useUsersContext } from '../../../../context/UsersContext/UsersContext'

const TableSelector = () => {
  const { setIsOpen } = useUsersContext()

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <TableSelectorWrapper customSTyles="d-flex justify-content-end align-items-center">
      <ButtonAdd handleClick={handleOpen} className="btn-primary" />
    </TableSelectorWrapper>
  )
}

export default TableSelector

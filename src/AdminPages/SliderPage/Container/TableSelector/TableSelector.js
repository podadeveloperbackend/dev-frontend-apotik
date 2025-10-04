import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import ButtonAdd from '../../../../components/ButtonAdd/ButtonAdd'
import { useSlidersContext } from '../../../../context/SliderContext/SliderContext'

const TableSelector = () => {
  const { setIsOpen } = useSlidersContext()

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <TableSelectorWrapper customSTyles="d-flex justify-content-end">
      <ButtonAdd handleClick={handleOpen} className="btn-primary" />
    </TableSelectorWrapper>
  )
}

export default TableSelector

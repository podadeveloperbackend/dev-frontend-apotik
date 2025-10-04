import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import ButtonAdd from '../../../../components/ButtonAdd/ButtonAdd'
import { useSupplierContext } from '../../../../context/SupplierContext/SupplierContext'
import SearchInput from '../../../../components/SearchInput/SearchInput'

const TableSelector = () => {
  const { setSearch, search, handleOpenModal } = useSupplierContext()

  return (
    <TableSelectorWrapper customSTyles="d-flex justify-content-end align-items-center gap-2">
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Cari Supplier"
        className="form-control"
      />
      <ButtonAdd
        handleClick={handleOpenModal}
        className="btn-primary"
      />
    </TableSelectorWrapper>
  )
}

export default TableSelector

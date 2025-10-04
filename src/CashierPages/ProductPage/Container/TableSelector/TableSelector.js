import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import SearchInput from '../../../../components/SearchInput/SearchInput'
import AsyncSelect from 'react-select/async'
import ButtonAdd from '../../../../components/ButtonAdd/ButtonAdd'
import { useProductContext } from '../../../../context/ProductContext/ProductContext'
import { getCategory } from '../../../../services/Category/api'

const TableSelector = () => {
  const { setSearch, search, setCategories } = useProductContext()

  const loadOptionsKategori = async (inputValue) => {
    try {
      const response = await getCategory({ name: inputValue })
      return response.map((category) => ({
        label: category.name,
        value: category.id,
      }))
    } catch (error) {
      
    }
  }

  return (
    <TableSelectorWrapper customSTyles="d-flex justify-content-end align-items-center">
      <div className="me-2">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Cari Obat"
          className="form-control"
        />
      </div>
    </TableSelectorWrapper>
  )
}

export default TableSelector

import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import SearchInput from '../../../../components/SearchInput/SearchInput'
import AsyncSelect from 'react-select/async'
import ButtonAdd from '../../../../components/ButtonAdd/ButtonAdd'
import { useProductContext } from '../../../../context/ProductContext/ProductContext'
import { getCategory } from '../../../../services/Category/api'

const TableSelector = () => {
  const { setSearch, search, setIsOpen, setCategories } = useProductContext()

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

  const onChangeKategori = (value) => {
    if (!value) {
      setCategories("")
      return
    }
    setCategories(value.value)
  }

  return (
    <TableSelectorWrapper customSTyles="d-flex justify-content-between align-items-center">
      <div className="me-2">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Cari Obat"
          className="form-control"
        />
      </div>

      <div className="me-2" style={{ width: "200px" }}>
        <AsyncSelect
          onChange={onChangeKategori}
          isClearable
          loadOptions={loadOptionsKategori}
          placeholder="Pilih Kategori"
          defaultOptions
          classNamePrefix="react-select"
        />
      </div>

      <ButtonAdd
        handleClick={() => setIsOpen(true)}
        className="btn-primary"
      />
    </TableSelectorWrapper>
  )
}

export default TableSelector

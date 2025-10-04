import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import Select from "react-select"
import { useOrderContext } from '../../../../context/OrderContext/OrderContext'

const TableSelector = () => {
  const { setTypeFilter } = useOrderContext()

  const options = [
    { value: 0, label: "Semua" },
    { value: 2, label: "Order By Cashier" },
    { value: 1, label: "Order By Checkout" }
  ]

  return (
    <TableSelectorWrapper customSTyles="justify-content-between">
      <div style={{ width: "200px" }}>
        <Select
          options={options}
          onChange={(e) => setTypeFilter(e.value)}
          defaultValue={options[0]}
          isSearchable={false}
        />
      </div>
    </TableSelectorWrapper>
  )
}

export default TableSelector

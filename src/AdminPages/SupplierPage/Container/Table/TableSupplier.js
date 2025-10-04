import React from 'react'
import ReusableTable from '../../../../components/ReusableTable/ReusableTable'
import Action from './Action/Action'
import { useSupplierContext } from '../../../../context/SupplierContext/SupplierContext'
import useDebounce from '../../../../hooks/useDebounce'
const TableSupplier = () => {
    const { suppliers: data, handleGetSuppliers, search} = useSupplierContext()
    const columns = [
        {
            accessor: 'name',
            header: 'Name'
        },
        {
            accessor: 'company',
            header: 'Company'
        },
        {
            accessor: 'email',
            header: 'Email'
        },
        {
            accessor: 'no_hp',
            header: 'No HP'
        },
        {
            accessor: 'address',
            header: 'Alamat'
        },
        {
            header: 'Action',
            accessor: 'id',
            Cell: Action
        }
    ]
    useDebounce(handleGetSuppliers, 500, [search]);
  return (
    <ReusableTable data={data} columns={columns} />
  )
}

export default TableSupplier
import React from 'react'
import ReusableTable from '../../../../components/ReusableTable/ReusableTable'
import { toRupiah } from '../../../../utils/Money'
import Action from './Action/Action'
import { useOrderContext } from '../../../../context/OrderContext/OrderContext'
import useDebounce from '../../../../hooks/useDebounce'

const TableOrder = () => {
    const { orders: data, handleGetOrders, typeFilter } = useOrderContext()
    const statusOrder = (value) => {
        switch (value) {
            case 0:
                return "Belum Bayar"
            case 1:
                return "Dibayar"
            case 2:
                return "Pengiriman"
            case 3:
                return "Selesai"
            default:
                return "Pending"
        }
    }

    const columns = [
        {
            accessor: 'name',
            header: 'Nama'
        },
        {
            accessor: 'sub_total',
            header: 'Tagihan',
        },
        {
            accessor: 'type',
            header: 'Tipe Pemesanan',
            Cell: ({ value }) => value !== 1 ? "Order By Cashier" : "Order By Checkout"
        },
        {
            accessor: 'method_payment',
            header: 'Metode Pembayaran',
        },
        {
            accessor: 'noresi',
            header: 'No Resi',
        },
        {
            accessor: 'status',
            header: 'Status',
            Cell: ({ value }) => statusOrder(value)
        },
                {
            accessor: 'return',
            header: 'Return',
        },
        {
            header: 'Action',
            accessor: 'id',
            Cell: Action
        }
    ]
    useDebounce(handleGetOrders, 500, [typeFilter])
  return (
    <ReusableTable data={data} columns={columns} />
  )
}

export default TableOrder
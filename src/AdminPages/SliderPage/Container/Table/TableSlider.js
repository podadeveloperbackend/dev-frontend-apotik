import React from 'react'
import ReusableTable from '../../../../components/ReusableTable/ReusableTable'
import { toRupiah } from '../../../../utils/Money'
import Action from './Action/Action'
import { useSlidersContext } from '../../../../context/SliderContext/SliderContext'

const TableSlider = () => {
    const { sliders: data } = useSlidersContext()

    const columns = [
        {
            accessor: 'number',
            header: 'Number'
        },
          {
            accessor: 'image',
            header: 'Image'
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

export default TableSlider
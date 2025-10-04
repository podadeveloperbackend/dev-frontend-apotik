import React from 'react'
import ActionsButtonTable from '../../../../../components/ReusableTable/ActionButtonTable/ActionButtonTable'
import { useOrderContext } from '../../../../../context/OrderContext/OrderContext'
import { useNavigate } from 'react-router-dom'
import { showSuccessToast } from '../../../../../components/Toast/showSuccessToast'

const Action = ({ value, row }) => {
  const { handleChangeStatus, handleOpenModal, setId, handleDetail, handleOpenDibayar} = useOrderContext()
  const navigate = useNavigate()
  
  const actions = [
    {
      type: 'Accept',
      onClick: () => {
        if (row.type == 1) {
          handleChangeStatus(row.id, 1)
          return
        }
        handleOpenDibayar(row.id)
      },
      show: row.status === 0
    },
    {
      type: 'Shipment',
      onClick: () => {
        setId(row.id)
        handleOpenModal()
      },
      show: row.status === 1
    },
    {
      type: 'Double Check',
      onClick: async () => {
        await handleChangeStatus(row.id, 3)
        showSuccessToast("Order selesai!")
      },
      show: row.status === 2
    },
    {
      type: 'View',
      onClick: () => {
      navigate(`${row.id}`)
        // handleDetail(row)
      },
      show: true
    },
  ].filter(action => action.show)
  return (
    <ActionsButtonTable actions={actions} />
  )
}

export default Action
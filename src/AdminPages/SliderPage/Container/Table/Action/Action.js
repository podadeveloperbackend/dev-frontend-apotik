import React from 'react'
import ActionsButtonTable from '../../../../../components/ReusableTable/ActionButtonTable/ActionButtonTable'
import { useSlidersContext } from '../../../../../context/SliderContext/SliderContext'

const Action = ({ value, row }) => {
  const {  handleDeleteSlider } = useSlidersContext()
  const actions = [
    {
      type: 'Delete',
      onClick: () => {
        handleDeleteSlider(row.id)
      }
    },
  ]
  return (
    <ActionsButtonTable actions={actions} />
  )
}

export default Action
import React from 'react'
import { useSlidersContext } from '../../../../../context/SliderContext/SliderContext'

const Footer = () => {
  const { handleAddSlider } = useSlidersContext()
  return (
    <div>
      <button onClick={handleAddSlider} className='btn-primary w-100'>Add Slider</button>
    </div>
  )
}

export default Footer
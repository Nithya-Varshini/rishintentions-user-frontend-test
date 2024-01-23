import React from 'react'
import './Popup.css'

const Popup = ({setPopup}) => {
  return (
    <div className='popup'>
        <button onClick={() => setPopup(false)}>cloase</button>
    </div>
  )
}

export default Popup
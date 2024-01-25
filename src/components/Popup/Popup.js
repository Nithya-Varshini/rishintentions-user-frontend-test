import React from 'react'
import './Popup.css'

const Popup = ({setPopup}) => {
  return (
    <div>
      <div className='backdrop' onClick={() => setPopup(false)}></div>
      <img className='popup' src={require('../../assets/popup.png')} alt='popup'/>
    </div>
  )
}

export default Popup
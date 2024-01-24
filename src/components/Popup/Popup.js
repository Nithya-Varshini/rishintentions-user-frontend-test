import React from 'react'
import './Popup.css'

const Popup = ({setPopup}) => {
  return (
    <img onClick={() => setPopup(false)} className='popup' src={require('../../assets/popup.png')} alt='popup'/>
  )
}

export default Popup
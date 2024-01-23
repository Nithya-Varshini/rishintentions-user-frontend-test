import React from 'react'
import "./ContentRight4.css"

const ContentRight4 = () => {
  return (
    <div className='content-right-1 spotify-bg'>
      <div className='spotify-content'>
        <div className='spotify-quoue'>&#x2f;&#x2f; Hear me out</div>
        <div className='spotify-title'>Get more connected with me</div>
        <div className='spotify-desc'>With our clear consumption-based pricing model, you are only charged for the build and deployment resources you consume. All other features come as standard.</div>
        <div className='spotify-links'>
          <img src={require('../../assets/spotify.png')} alt='spotify' className='spotify-link'/>
          <img src={require('../../assets/insta.png')} alt='instagram' className='insta-link'/>
        </div>
        <div className='spotify-footer'>
          <p>Start building for free or</p>
          <div className='spotify-footer-link'>book a session</div>
          </div>
      </div>
    </div>
  )
}

export default ContentRight4
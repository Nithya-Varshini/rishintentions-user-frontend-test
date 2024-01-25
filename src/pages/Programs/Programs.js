import React from 'react'
import './Programs.css'
import ContentLeft from '../../components/ContentLeft/ContentLeft'

const Programs = () => {
  return (
    <div className='content program-content'>
      <ContentLeft />
      <div className='content-right'>
        <div className='content-right-1'>
          <div className='content-right-header'>Programs</div>
          <div className='program-profile'>
            <div className='program-profile-bg'></div>
            <div className='program-profile-inner'>
              <div className='program-profile-inner-heading'>PRESENCE. POWER. PURPOSE.</div>
              <div className='program-profile-inner-para'>You’re going to unlock experiences that, at this point, you may only sense are possible…
                You’re right where you’re supposed to be.....</div>
              <div className='program-profile-apply-now'>
                Apply now
                <div className='program-profile-start'>Start</div>
              </div>
            </div>
            <div className='program-profile-image-container'>
              <img src={require('../../assets/program-photo.png')} alt='program profile' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs
import React from 'react'
import "./ContentRight2.css"
import { useNavigate } from 'react-router-dom'

const ContentRight2 = () => {

  const navigate = useNavigate();

  return (
    <div className='content-right-1'>
      <div className='content-right-header'>Book a session</div>
      <div className='content-right-session-heading'>Helping you Connect with<br />your Innerself.</div>
      <div className='content-right-session-desc'>Rishi is the vessel that can perhaps energize your existence.  Rishi simply information and evidence and gets out of the way because evoking that inner dialogu</div>
      <div className='session-one'>
        One
        <div className='session-one-inner'>on One <p>Live Session</p></div>
      </div>
      <div className='session-options'>
        <div className='session-lines'>
          <div className='session-line'></div>
          <div className='session-line'></div>
          <div className='session-line'></div>
          <div className='session-line'></div>
        </div>
        <div className='session-links'>
          <div className='session-link'>
            <div className='first-text'>COGNITIVE</div>
            <div className='second-text'>PERSONAL</div>
          </div>
          <div className='session-link'>
            <div className='first-text'>THERAPY</div>
            <div className='second-text'>REMEDY</div>
          </div>
          <div className='session-link'>
            <div className='first-text'>REFRESHMENT</div>
            <div className='second-text'>ENGAZING</div>
          </div>
          <div className='session-link'>
            <div className='first-text'>UNDERSTANDING</div>
            <div className='second-text'>HEALING</div>
          </div>
          <div className='session-link'>
            <div className='first-text'>REALISATION</div>
            <div className='second-text'>MOTIVATING</div>
          </div>
        </div>
      </div>
      <div className='session-verified'>
        <div className='session-verified-item'>
          <img alt='verify'src={require('../../assets/verified.png')} />
          <p>1 on 1 Sessions</p>
        </div>
        <div className='session-verified-item'>
          <img alt='verify' src={require('../../assets/verified.png')} />
          <p>Comforting</p>
        </div>
        <div className='session-verified-item'>
          <img alt='verify' src={require('../../assets/verified.png')} />
          <p>Scheduled meetings</p>
        </div>
      </div>
      <div className='session-panel'>
        <div className='session-panel-left'>
          <img alt='session quotes' src={require('../../assets/quote.png')} className='quote-image' />
          <div className='session-panel-left-desc'>Are you experiencing exponential success in your sacred work – but still feel the impatient call of your deeper legacy? Where can you find a trusted spiritual advisor, who, like a mirror, can reflect the fullness of your gifts?</div>
          <div className='session-panel-left-profile'>
            <div className='session-panel-left-profile-image'></div>
            <div className='session-panel-left-profile-names'>
              <p>RISHI NAGPAL</p>
              <p>RISHINTENTIONS</p>
            </div>
          </div>
        </div>
        <div className='session-panel-right'>
          <p>I see you because I, <span>RISHI NAGPAL</span>, am traveling the same path. </p>
          <button onClick={() => navigate('/booking')}>Book a Session</button>
        </div>
      </div>
    </div>
  )
}

export default ContentRight2
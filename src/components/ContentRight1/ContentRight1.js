import React from 'react'
import "./ContentRight1.css"
import { Icon } from '@iconify/react'

const ContentRight1 = () => {
  return (
    <div className='content-right-1'>
            <div className='content-right-header'>About me</div>
            <div className='content-right-profile'>
              <div className='content-right-profile-content'>
                <div className='content-right-profile-content-heading'>Who am I ?</div>
                <div className='content-right-profile-content-para'>
                  Rishi purposefully places himself as an intuitive guide, his profound inner voice offering insights into diverse realms. Fueled by curiosity in psychology, philosophy, yoga, ayurveda, fitness, music, meditation, entrepreneurship, social dynamics, public speaking, and health, he is merely a bridge towards the infinite path of purpose and possibility. Continually nurturing his intuition through a blend of silence and teaching, Rishi's fascination with the dualities in a human’s experience steered him toward spiritual pursuits. Rishintentions, born out of
                </div>
                <div className='right-inner-button'>
                  <div className='right-inner-button-left'>Learn More</div>
                  <div className='right-inner-button-right'><Icon icon="mingcute:right-line" color="white"/></div>
                </div>
              </div>
              <img src={require('../../assets/profile.png')} className='content-right-profile-image' alt='profile-img' />
            </div>
            <div className='spirtual-text'>
              {/* <div className='spirtual-guru'>
                <p>SPIRITUAL GURU,</p>
                <img src={require('../../assets/text-1.png')} />
                <img src={require('../../assets/text-2.png')} />
                <img src={require('../../assets/text-3.png')} />
              </div>
              <div className='spirtual-guru'>
                <img src={require('../../assets/text-4.png')} />
                <p>THERAPY ENTREPRENUER</p>
              </div> */}
            </div>
          </div>
  )
}

export default ContentRight1
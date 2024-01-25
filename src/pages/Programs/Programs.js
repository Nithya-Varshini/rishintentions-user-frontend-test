import React from 'react'
import './Programs.css'
import download1 from './img/Vector.svg';
import vect from './img/Vector1.svg';
import sp from './img/unsplash.png';
import im from './img/image.png';
import im1 from './img/img1.svg';
import im2 from './img/img2.svg';
import im3 from './img/img3.svg';
import im4 from './img/img4.svg';
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
          <div className="box">

            <img className="vector" alt="Vector" src={download1} />
          </div>
          <p className="a-GREAT-MAN-IS-THE">
            A GREAT MAN IS THE MAN WHO, NO MATTER <br />
            WHAT HAS HAPPENED,
            <br />
            IS MOVING TO BECOME BETTER.
          </p>
          <div className="box1">

            <img className="vector1" alt="Vector" src={vect} />
          </div>

          <div className='inner-block'>

            <div className='inner-block-heading'>PROGRAMS</div>
            <div className='inner-block-1'>
              <div className='left-block'>

                <img src={sp} alt='program profile' className='inner-image' />
                <div className="text-wrapper-5">Mystique Momentum (MM)</div>
                <div className="image-with-content">
                  <img src={im} alt="tick-mark" className='imgg' />
                  <div className="content22">3 Months</div>
                </div>
                <div className="image-with-content">
                  <img src={im} alt="tick-mark" className='imgg' />
                  <div className="content22">5 Calls per month</div>
                </div>
                <div className="image-with-content">
                  <img src={im} alt="tick-mark" className='imgg' />
                  <div className="content22">x1 Personalised Retreat in Costa Rica Voice Chat Access to Rick</div>
                </div>
              </div>
              <div className='right-block'>
                <div className="text-wrap">
                  <div className="text-heading">Mystique Momentum (MM)</div>
                  <div className="text-content">$5800</div>
                </div>
                <div className='text-wrapper-25'>A 2-month experience toward self-awareness and purpose. Receive intuitive readings, creative guidance, and weekly sessions with follow-ups. 1on1 sessions with Rishi, his team, and trusted masters/experts in various industries for optimal activation.</div>
                <div className='button-25'>Apply Now</div>
              </div>
            </div>
            <div className='inner-block-1'>
            <div className='right-block' style={{paddingLeft:"40px "}}>
                <div className="text-wrap">
                  <div className="text-heading">Mystique Momentum (MM)</div>
                  <div className="text-content">$9800</div>
                </div>
                <div className='text-wrapper-25'>Embark on a 4-month exploration with guidance, creative insights, intuitive support readings and the opportunity to meet in-person and benefit from weekly sessions with personalized follow-ups. 1on1 sessions with Rishi, his team, and trusted masters/experts in various industries for optimal activation</div>
                <div className='button-25'>Apply Now</div>
              </div>
              <div className='left-block'>

                <img src={sp} alt='program profile' className='inner-image' />
                <div className="text-wrapper-5">Mystique Momentum (MM)</div>
                <div className="image-with-content">
                  <img src={im} alt="tick-mark" className='imgg' />
                  <div className="content22">5 Months</div>
                </div>
                <div className="image-with-content">
                  <img src={im} alt="tick-mark" className='imgg' />
                  <div className="content22">9 Calls per month</div>
                </div>
                <div className="image-with-content">
                  <img src={im} alt="tick-mark" className='imgg' />
                  <div className="content22">x3 Personalised Retreat in Costa Rica Voice Chat Access to Rick</div>
                </div>
              </div>
              
            </div>

          </div>

          <div className='inner-block-12'>
            <div className='text-1'>WHY CHOOSE US</div>
            <div className='text-2'>Mental Illness Cannot<br></br> Measurement Your Actual <br></br>Importance</div>
            <div className='text-3'>Lorem ipsum dolor sit amet consectetur adipisicing to elit sedient for dole there eiusmod labore dolore magna aliqua denim ad minim veniam quis nostrud exerctation ullamco laibor nisi above murli aliquip</div>
            <div className='inner-12'>
              <div className='inner-12-1'><img src={im1} alt="tick-mark" className='imggg' /></div>
              <div classname='content-12'><div className='content-12-1'>Satisfied Patient Services</div>Dui Tristique pretium tempor odio ante commodo</div>
              <div className='inner-12-1'><img src={im2} alt="tick-mark" className='imggg' /></div>
              <div classname='content-12'><div className='content-12-1'>Support Customer Manager</div>Dui Tristique pretium tempor odio ante commodo</div>
            </div>
            <div className='inner-12'>
              <div className='inner-12-1'><img src={im3} alt="tick-mark" className='imggg' /></div>
              <div classname='content-12'><div className='content-12-1'>Dedicated & Expert Doctors</div>Dui Tristique pretium tempor odio ante commodo</div>
              <div className='inner-12-1'><img src={im4} alt="tick-mark" className='imggg' /></div>
              <div classname='content-12'><div className='content-12-1'>Regularly Patients inspection</div>Dui Tristique pretium tempor odio ante commodo</div>
            </div>
          </div>
          <div className='footer'>
          <div className='text-11'>READY TO</div>
          <div className='text-22'>GET STARTED?</div>
          <div className='text-33'>Talk to us</div>
      </div>
        </div>
       

      </div>
      
      <div className='background'>
        <img src={require('../../assets/logo.png')} alt='logo' className='bg-logo' />
      </div>
    </div>

  )
}

export default Programs
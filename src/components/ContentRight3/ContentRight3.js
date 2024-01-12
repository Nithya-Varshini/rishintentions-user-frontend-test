import React from 'react'
import "./ContentRight3.css"

const ContentRight3 = () => {
  return (
    <div className='content-right-1'>
      <div className='content-right-header'>Testimonials</div>
      <div className='testimonial-text'>
        <p>
          “he is amazing
          <div className='testimonial-image'>
            <img src={require('../../assets/testimonial-1.png')} alt="testimanial 0" />
            <div className='tooltip'>
              <p>"</p>
              <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
              <p>name</p>
              <p>designation</p>
            </div>
          </div>
          personal favorite
        </p>

        <p>
          simply good
          <div className='testimonial-image'>
            <img  src={require('../../assets/testimonial-2.png')} alt="mala" />
            <div className='tooltip'>
              <p>"</p>
              <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
              <p>name</p>
              <p>designation</p>
            </div>
          </div>
          “one of the best guys I have to
        </p>

        <p>
          rely on when you need!
          <div className='testimonial-image'>
            <img src={require('../../assets/testimonial-3.png')} alt="testimanial" />
            <div className='tooltip'>
              <p>"</p>
              <p>The DataTables Content Delivery Network (CDN) is a permanent store of the software released as part of the DataTables project for you to use on your site without needing to host it yourself.</p>
              <p>name</p>
              <p>designation</p>
            </div>
          </div>
          friendly”
        </p>
      </div>
    </div>
  )
}

export default ContentRight3
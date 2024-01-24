import React from 'react'
import './Home.css'
import ContentRight1 from '../../components/ContentRight1/ContentRight1';
import ContentRight2 from '../../components/ContentRight2/ContentRight2';
import ContentRight3 from '../../components/ContentRight3/ContentRight3';
import ContentRight4 from '../../components/ContentRight4/ContentRight4';
import ContentLeft from '../../components/ContentLeft/ContentLeft';

const Home = () => {

  return (
    <>
      <div className='content'>
        <ContentLeft />
        <div className='content-right'>
          <ContentRight1 />
          <ContentRight2 />
          <ContentRight3 />
          <ContentRight4 />
          <div className='content-right-1 fotter'>
          </div>
        </div>
        <div className='background'>
          <img src={require('../../assets/logo.png')} alt='logo' className='bg-logo'/>
        </div>
      </div>
    </>
  )
}

export default Home
import React, { useState } from 'react'
import "./Nav.css"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const Nav = () => {
    const [navActive, setNavActive] = useState(false)
    return (
        <div className='nav'>
            <div className={`links ${navActive && 'links-active'}`}>
                <Link onClick={() => setNavActive(false)} className='link' to='/'>
                    <div className='link-inner'>Home</div>
                </Link>
                <Link onClick={() => setNavActive(false)} className='link' to='/booking'>
                    <div className='link-inner'>Book A Session</div>
                </Link>
                <Link onClick={() => setNavActive(false)} className='link' to='/store'>
                    <div className='link-inner'>Store</div>
                </Link>
                <Link onClick={() => setNavActive(false)} className='link' to='#'>
                    <div className='link-inner'>About</div>
                </Link>
            </div>
            <div className='icons-group' onClick={() => setNavActive(pre => !pre)}>
                <Icon icon="solar:hamburger-menu-broken" className={`hamburger ${navActive && 'hamburger-active'}`} />
                <Icon icon="ic:round-close" className={`close ${navActive === true && 'close-active'}`} />
            </div>
        </div>
    )
}

export default Nav
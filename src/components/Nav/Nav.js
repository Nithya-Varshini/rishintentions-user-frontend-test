import React, { useEffect, useRef, useState } from 'react'
import "./Nav.css"
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    const [navActive, setNavActive] = useState(false)
    let c = useRef(0)
    useEffect(() => {

        const handleScroll = () => {
            if(c.current>20){
                setNavActive(false)
                c.current=0;
            }
            c.current++;
        } 

        document.addEventListener('scroll',handleScroll)
        return () => {
            document.removeEventListener('scroll',handleScroll)
        }
    },[])

    return (
        <div className='nav'>
            <div className={`links ${navActive && 'links-active'}`}>
                <NavLink onClick={() => setNavActive(false)} className='link' to='/'>
                    <div className='link-inner'>Home</div>
                </NavLink>
                <NavLink onClick={() => setNavActive(false)} className='link' to='/programs'>
                    <div className='link-inner'>Programs</div>
                </NavLink>
                <NavLink onClick={() => setNavActive(false)} className='link' to='/booking'>
                    <div className='link-inner'>Book A Session</div>
                </NavLink>
                <NavLink onClick={() => setNavActive(false)} className='link' to='/store'>
                    <div className='link-inner'>Store</div>
                </NavLink>
                <NavLink onClick={() => setNavActive(false)} className='link' to='/about'>
                    <div className='link-inner'>About</div>
                </NavLink>
            </div>
            <div className='icons-group' onClick={() => setNavActive(pre => !pre)}>
                <Icon icon="solar:hamburger-menu-broken" className={`hamburger ${navActive && 'hamburger-active'}`} />
                <Icon icon="ic:round-close" className={`close ${navActive === true && 'close-active'}`} />
            </div>
        </div>
    )
}

export default Nav
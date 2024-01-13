import React, { useEffect, useState } from 'react'
import "./ContentLeft.css"
import { Icon } from '@iconify/react'

const ContentLeft = () => {

    const [stop, setStop] = useState(false)

    const handleScroll = (e) => {
        let top = document.documentElement.scrollTop;
        if (top > window.innerHeight) {
            setStop(true)
        }
        else {
            setStop(false)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className='content-left'>
            <div className={`content-left-float ${stop && 'float-true'}`}>
                <div className='left-inner-1'>
                    <div>
                        <div className='left-inner-name'>Rishintentions</div>
                        <div className='left-inner-desc'>Hola, Welcome to my world, Get to know me better and book sessions with me</div>
                    </div>
                    <div className='left-inner-buy'>Buy my products</div>
                </div>
                <div className='left-inner-button'>
                    <div className='left-inner-button-left'>Store</div>
                    <div className='left-inner-button-right'><Icon icon="mingcute:right-line" /></div>
                </div>
                <div className='left-inner-button'>
                    <div className='left-inner-button-left'>Book A Session</div>
                    <div className='left-inner-button-right'><Icon icon="mingcute:right-line" /></div>
                </div>
                <div className='left-inner-button'>
                    <div className='left-inner-button-left'>Donate</div>
                    <div className='left-inner-button-right'><Icon icon="mingcute:right-line" /></div>
                </div>
            </div>
        </div>
    )
}

export default ContentLeft
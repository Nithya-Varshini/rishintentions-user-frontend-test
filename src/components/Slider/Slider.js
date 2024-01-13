import React, { useEffect, useRef } from 'react'
import "./Slider.css"

const Slider = ({slider_images}) => {

    const scrollRef = useRef(null)
    const count = useRef(0);
    
    useEffect(() => {
        const intreval = setInterval(() => {
            if(scrollRef.current){
                if(count.current === slider_images.length+1){
                    scrollRef.current.style.scrollBehavior = "unset";
                    scrollRef.current.scrollLeft = 0
                    count.current=1
                    scrollRef.current.style.scrollBehavior = "smooth";
                    scrollRef.current.scrollLeft = (scrollRef.current.clientWidth)*count.current
                }
                else{
                    scrollRef.current.scrollLeft = (scrollRef.current.clientWidth)*count.current
                    count.current++;
                }
            }
        },4000)

        return ()=>{
            clearInterval(intreval)
        }
    },[])

    return (
        <div className='image-slider' ref={scrollRef}>
            {
                slider_images.map((ele,ind) => 
                    <img src={ele} className='slide' alt="slide" key={ind}/>
                )
            }
            <img src={slider_images[0]} className='slide' alt="slide" key={slider_images.length}/>
        </div>
    )
}

export default Slider
import React from 'react'
import "./Booking.css"
import Spline from '@splinetool/react-spline'

const Booking = () => {
    return (
        <div className='booking'>
            <iframe src="https://rishintentions.as.me/schedule.php" title="Schedule Appointment" width="85%" className='frame'></iframe>
            <Spline
                className='background'
                scene="https://prod.spline.design/iDsKkcvfDrAFN1Ux/scene.splinecode"
            />
        </div>
    )
}

export default Booking
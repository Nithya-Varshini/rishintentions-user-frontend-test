import React from 'react'
import "./Booking.css"

const Booking = () => {
    return (
        <div className='booking' >
            <iframe 
                name="iframe1" 
                id="iframe1" 
                src="https://rishintentions.as.me/schedule.php" 
                title="Schedule Appointment" 
                width="85%" 
                className='frame'
            ></iframe>
        </div >
    )
}

export default Booking
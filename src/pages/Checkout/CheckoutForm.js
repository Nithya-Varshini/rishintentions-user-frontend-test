import React from 'react'
import './Checkout.css'
import PayPal from '../../components/PayPal/PayPal'

const CheckoutForm = () => {
    return (
        <div className='checkout-left'>
            <div className='checkout-heading'>Purchase Menu</div>
            <div className='checkout-sub-heading'>Contact</div>
            <input type='text' placeholder='Email' className='input-full' />
            <div className='offer'>
                <input type='checkbox' id='get-offer' />
                <label htmlFor='get-offer' >Email me with latest products and offers</label>
            </div>
            <div className='checkout-sub-heading'>Shipping address</div>
            <div className='input-container'>
                <input type='text' placeholder='County' className='input-half' />
                <input type='text' placeholder='State' className='input-quater' />
                <input type='text' placeholder='Pin code' className='input-quater' />
            </div>
            <div className='input-container'>
                <input type='text' placeholder='First name' className='input-half' />
                <input type='text' placeholder='Last name' className='input-half' />
            </div>
            <input type='text' placeholder='Address' className='input-full' />
            <div className='input-container'>
                <input type='text' placeholder='Apartment, suite, etc. ( Optional)' className='input-half' />
                <input type='text' placeholder='City' className='input-half' />
            </div>
            <input type='text' placeholder='Phone' className='input-full' />
            <PayPal />
        </div>
    )
}

export default CheckoutForm
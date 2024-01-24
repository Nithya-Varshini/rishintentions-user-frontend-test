import React from 'react'
import './Checkout.css'
import CheckoutCart from './CheckoutCart'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ products }) => {
  return (
    <div className='checkout'>
      <CheckoutForm />
      <CheckoutCart products={products}/>
    </div>
  )
}

export default Checkout
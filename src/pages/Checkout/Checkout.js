import React, { useEffect, useState } from 'react'
import './Checkout.css'
import CheckoutCart from './CheckoutCart'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ products, fetchStoreData }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products === undefined) {
      fetchStoreData(setLoading)
    }
    else{
      setLoading(false)
    }
  // eslint-disable-next-line
  }, [])

  return (

    <div className='checkout'>
      {loading ? <div>Loading...</div> :
        <>
          <CheckoutForm />
          <CheckoutCart products={products} />
        </>
      }
    </div>
  )
}

export default Checkout
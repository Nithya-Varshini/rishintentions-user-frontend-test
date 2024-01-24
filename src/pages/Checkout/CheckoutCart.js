import React, { useEffect, useState } from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom';


const CheckoutCart = ({ products }) => {

    const [cartData, setCartData] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const loadCart = () => {
        let tempCartData = JSON.parse(localStorage.getItem('cart'))
        if (tempCartData !== null) {
            setCartData(tempCartData)
        }
    }

    useEffect(() => {
        loadCart()
    }, [])

    useEffect(() => {
        let tot = 0;
        Object.keys(cartData).forEach((ele) => {
            if (products[ele] !== undefined) {
                tot += products[ele].discount ?
                    (products[ele].price * cartData[ele].qty) - ((products[ele].price * cartData[ele].qty) * (products[ele].discount / 100))
                    :
                    (products[ele].price * cartData[ele].qty)
            }
        })
        setCartTotal(tot)
        // eslint-disable-next-line
    }, [cartData])


    return (
        <div className='checkout-right'>
            <div className='checkout-card-container'>
                {Object.keys(cartData).map((ele, ind) =>
                    <div className='checkout-card'>
                        {products[ele] &&
                            <>
                                <div className='checkout-card-left'>
                                    <div className='checkout-card-image-container'>
                                        <img alt='cart' src={products[ele].image} className='checkout-image' />
                                    </div>
                                    <div className='checkout-card-content-inner'>
                                        <div>{products[ele].name}</div>
                                        <p>SIZE : {cartData[ele].size === '' ? <Link to={`/product/Category/${ele}`}>Choose Color</Link> : cartData[ele].size}</p>
                                        <p>COLOR : {cartData[ele].color === '' ? <Link to={`/product/Category/${ele}`}>Choose Size</Link> : cartData[ele].color}</p>
                                        <p>QTY : {cartData[ele].qty}</p>
                                    </div>
                                </div>
                                <div className='checkout-card-right'>
                                    ${products[ele].discount ? (products[ele].price * cartData[ele].qty) - ((products[ele].price * cartData[ele].qty) * (products[ele].discount / 100)) : (products[ele].price * cartData[ele].qty)}
                                </div>
                            </>
                        }
                    </div>
                )}
            </div>
            <div className='checkout-bill'>
                <div className='checkout-bill-inner'>
                    <p>Subtotal</p>
                    <p>${cartTotal}.00</p>
                </div>
                <div className='checkout-bill-inner'>
                    <p>Shipping</p>
                    <p>$8.00</p>
                </div>
                <div className='checkout-hr-line'></div>
                <div className='checkout-bill-inner'>
                    <p>Total</p>
                    <p>${cartTotal+8}.00</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart
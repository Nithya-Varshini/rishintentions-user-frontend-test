import React, { useEffect, useState } from 'react'
import './Cart.css'
import { Icon } from '@iconify/react';

const Cart = ({ cartActive, setCartActive, products }) => {

    const [cartData, setCartData] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const loadCart = () => {
        let tempCartData = JSON.parse(localStorage.getItem('cart'))
        if (tempCartData !== null) {
            setCartData(tempCartData)
        }
    }

    useEffect(() => {
        if (cartActive === true) {
            loadCart()
        }
    }, [cartActive])

    useEffect(() => {
        let tot = 0;
        Object.keys(cartData).forEach((ele) => {
            tot += products[ele].discount ? 
            (products[ele].price * cartData[ele].qty) - ((products[ele].price * cartData[ele].qty) * (products[ele].discount / 100)) 
            : 
            (products[ele].price * cartData[ele].qty)
        })
        setCartTotal(tot)
    },[cartData])

    const handleRemove = (id) => {
        let newCart = cartData;
        delete newCart[id]
        localStorage.setItem('cart', JSON.stringify(newCart))
        loadCart()
    }

    const handleDecrement = (id) => {
        let newCart = cartData;
        if (newCart[id].qty > 1) {
            newCart[id].qty -= 1;
            localStorage.setItem('cart', JSON.stringify(newCart))
            loadCart()
        }
    }

    const handleIncrement = (id) => {
        let newCart = cartData;
        newCart[id].qty += 1;
        localStorage.setItem('cart', JSON.stringify(newCart))
        loadCart()
    }

    return (
        <div className={`cart ${cartActive === true && 'cart-active'}`}>
            <div className='cart-header'>
                <div className='cart-header-name'>Cart</div>
                <Icon icon="ic:round-close" onClick={() => setCartActive(false)} className='cart-header-close' />
            </div>
            <div className='cart-card-container'>
                {Object.keys(cartData).map((ele, ind) =>
                    <div className='cart-card'>
                        {products[ele] &&
                            <>
                                <div className='cart-image-container'>
                                    <img alt='cart' src={products[ele].image} className='cart-image' />
                                </div>
                                <div className='cart-card-content'>
                                    <div className='cart-card-content-inner'>
                                        <div>{products[ele].name}</div>
                                        <div className='product-price cart-price-inner'>
                                            {products[ele].discount && <del>${products[ele].price * cartData[ele].qty}</del>}
                                            ${products[ele].discount ? (products[ele].price * cartData[ele].qty) - ((products[ele].price * cartData[ele].qty) * (products[ele].discount / 100)) : (products[ele].price * cartData[ele].qty)}
                                        </div>
                                    </div>
                                    <div className='cart-card-content-inner'>
                                        <p>SIZE : {cartData[ele].size}</p>
                                        <p>COLOR : {cartData[ele].color}</p>
                                    </div>
                                    <div className='cart-card-content-inner'>
                                        <div className='quantity'>
                                            <button onClick={() => handleDecrement(ele)}>-</button>
                                            <div className='qty-number'>{cartData[ele].qty}</div>
                                            <button onClick={() => handleIncrement(ele)}>+</button>
                                        </div>
                                        <button className='remove-cart' onClick={() => handleRemove(ele)}>REMOVE FROM THE LIST</button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                )}
            </div>
            <div className='cart-checkout-container'>
            <div className='cart-total'>
                <p>Total</p>
                <p>{cartTotal}</p>
            </div>            
            <button>checkout</button>
            </div>
        </div>
    )
}

export default Cart
import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';

const ProductCard = ({ ele, activeCategory, setCartActive }) => {

    const navigate = useNavigate();

    const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart === null) {
      cart = {}
      cart[ele._id] = { qty: 1, color: ''.color, size: '' };
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    else {
      if (ele._id in cart) {
        console.log("in")
      }
      else {
        cart[ele._id] = { qty: 1, color: '', size: '' };
      }
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    setCartActive(true)
  }

    return (
        <div className='product-card-container' onClick={(e) => { e.target.tagName === 'svg' || e.target.tagName === 'path' ? handleAddToCart() : navigate(`/product/${activeCategory}/${ele._id}`) }}>
            <div className='product-image-container'>
                {ele.discount &&
                    <div className='discount-indicator'>-{ele.discount}%</div>
                }
                <img className='product-image' src={ele.image} alt="product img" />
            </div>
            <div className='product-desc'>
                <div>
                    <div className='product-name'>{ele.name}</div>
                    <div className='product-price'>
                        ${ele.discount ? ele.price - (ele.price * (ele.discount / 100)) : ele.price}
                        {ele.discount && <del>${ele.price}</del>}
                    </div>
                </div>
                <Icon icon="f7:cart" className='add-to-cart-button' />
                {/* <img className='add-to-cart-button' src={require('../../assets/cart-icon.png')} alt='add to cart' /> */}
            </div>
        </div>
    )
}

export default ProductCard
import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';

const ProductCard = ({ ele, activeCategory }) => {

    const navigate = useNavigate();

    return (
        <div className='product-card-container' onClick={(e) => { e.target.tagName === 'svg' || e.target.tagName === 'path' ? console.log("add-to-cart") : navigate(`/product/${activeCategory}/${ele._id}`) }}>
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
                <Icon className='add-to-cart-button' icon="fluent:add-12-filled" />
                {/* <img className='add-to-cart-button' src={require('../../assets/cart-icon.png')} alt='add to cart' /> */}
            </div>
        </div>
    )
}

export default ProductCard
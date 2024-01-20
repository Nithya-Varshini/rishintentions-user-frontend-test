import React, { useState } from 'react'
import "./ProductPage.css"
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom'

const ProductPage = ({ products, setData, setCartActive }) => {

  if (products === undefined) {
    fetch('http://localhost:4000/store-home')
      .then(res => res.json())
      .then(data => { setData(data); console.log(data) })
      .catch(err => console.log(err))
  }

  const { category, id } = useParams()
  const [activeColor, setActiveColor] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [activeDes, setActiveDes] = useState(0);
  const [size, setSize] = useState('S')

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart === null) {
      cart = {}
      cart[id] = { qty: 1, color: products[id].variants[parseInt(activeColor)].color, size: size };
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    else {
      if (id in cart) {
        cart[id] = { qty: 1, color: products[id].variants[parseInt(activeColor)].color, size: size };
        console.log("in")
      }
      else {
        cart[id] = { qty: 1, color: products[id].variants[parseInt(activeColor)].color, size: size };
      }
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    setCartActive(true)
  }

  return (
    <>
      {products !== undefined &&
        <div className='product-page'>
          <div className='product-subdivision'>{`Store / ${category} / ${products[id]?.name}`}</div>
          <div className='product-page-content'>
            <div className='product-page-content-left'>
              <div className='side-images'>
                {
                  products[id].variants[activeColor].images.map((ele, ind) =>
                    <img src={ele} key={ind} alt={`side ${ind}`} className='side-image' onClick={() => setActiveImage(ind)} />
                  )
                }
              </div>
              <div className='main-image'>
                <img className='main-image-inner' alt='main' src={products[id].variants[activeColor].images[activeImage]} />
              </div>
            </div>
            <div className='product-page-content-right'>
              <div className='product-name product-name-inner'>{products[id]?.name}</div>
              <div className='product-price product-price-inner'>
                {products[id].discount && <del>${products[id].price}</del>}
                ${products[id].discount ? products[id].price - (products[id].price * (products[id].discount / 100)) : products[id].price}
              </div>
              <div className='color-size'>
                <select onChange={(e) => { setActiveColor(e.target.value); setActiveImage(0) }}>
                  {products[id].variants.map((ele, ind) =>
                    <option value={ind} key={ind}>{ele.color}</option>
                  )}
                </select>
                <select onChange={(e) => setSize(e.target.value)}>
                  <option disabled={parseInt(products[id].variants[activeColor].XS) === 0} value='XS'>XS - {products[id].variants[activeColor].XS} left</option>
                  <option disabled={parseInt(products[id].variants[activeColor].S) === 0} value='S'>S - {products[id].variants[activeColor].S} left</option>
                  <option disabled={parseInt(products[id].variants[activeColor].M) === 0} value='M'>M - {products[id].variants[activeColor].M} left</option>
                  <option disabled={parseInt(products[id].variants[activeColor].L) === 0} value='L'>L - {products[id].variants[activeColor].L} left</option>
                  <option disabled={parseInt(products[id].variants[activeColor].XL) === 0} value='XL'>XL - {products[id].variants[activeColor].XL} left</option>
                  <option disabled={parseInt(products[id].variants[activeColor].XXL) === 0} value='XXL'>XXL - {products[id].variants[activeColor].XXL} left</option>
                </select>
              </div>
              <button className='add-to-cart' onClick={handleAddToCart}>Add To Cart</button>
              <div className='desc-container'>
                <div className='product-desc-heding' onClick={() => setActiveDes(0)}>{activeDes === 0 ? '-' : '+'} Description</div>
                <div className={`product-desc-inner ${activeDes === 0 && 'product-desc-inner-active'}`}>{products[id].description}</div>
              </div>

              <div className='desc-container'>
                <div className='product-desc-heding' onClick={() => setActiveDes(1)}>{activeDes === 1 ? '-' : '+'} Size chart</div>
                <div className={`product-desc-inner ${activeDes === 1 && 'product-desc-inner-active'}`}>{products[id].description}</div>
              </div>

              <div className='desc-container'>
                <div className='product-desc-heding' onClick={() => setActiveDes(2)}>{activeDes === 2 ? '-' : '+'} Shipping and Returns</div>
                <div className={`product-desc-inner ${activeDes === 2 && 'product-desc-inner-active'}`}>{products[id].description}</div>
              </div>
            </div>
          </div>
          <div onClick={() => setCartActive(true)} className='cart-btn'>
            <Icon icon="solar:cart-outline" />
          </div>
        </div>
      }
    </>
  )
}

export default ProductPage
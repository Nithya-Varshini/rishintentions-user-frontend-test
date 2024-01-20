import React from 'react'
import './ProductGallery.css'
import ProductCard from '../ProductCard/ProductCard'

const ProductGallery = ({category,products,activeCategory,setCartActive}) => {
    return (
        <div className='product-gallery'>
            {
                category && category.map((ele,ind) =>
                    <ProductCard  ele={products[ele]} key={ind} activeCategory={activeCategory} setCartActive={setCartActive}/>
                )
            }
        </div>
    )
}

export default ProductGallery
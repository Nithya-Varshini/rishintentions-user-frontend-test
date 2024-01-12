import React from 'react'
import './ProductGallery.css'
import ProductCard from '../ProductCard/ProductCard'

const ProductGallery = ({category,products,activeCategory}) => {
    return (
        <div className='product-gallery'>
            {
                category && category.map((ele,ind) =>
                    <ProductCard  ele={products[ele]} key={ind} activeCategory={activeCategory}/>
                )
            }
        </div>
    )
}

export default ProductGallery
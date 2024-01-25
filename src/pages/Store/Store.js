import React, { useEffect, useState } from 'react'
import "./Store.css"
import Slider from '../../components/Slider/Slider'
import FlashSale from '../../components/FlashSale/FlashSale'
import CategoryNav from '../../components/CategoryNav/CategoryNav'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import { Icon } from '@iconify/react'
import { useParams } from 'react-router-dom'

const Store = ({ storeData, setCartActive, fetchStoreData, cartCount, fetchCartCount }) => {

  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null)
  const { LinkCategory } = useParams();

  useEffect(() => {
    fetchStoreData(setLoading)
    if (cartCount === null) {
      fetchCartCount()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className='store-bg'>
      {
        loading
          ?
          <>loading..</>
          :
          <>
            {storeData.slider_images &&
              <Slider
                slider_images={storeData.slider_images}
              />
            }

            {storeData.flash_sale && <FlashSale flash_sale={storeData.flash_sale} />}

            <CategoryNav
              LinkCategory={LinkCategory}
              category={storeData.category}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <ProductGallery
              category={storeData.category[activeCategory]}
              products={storeData.products}
              activeCategory={activeCategory}
              setCartActive={setCartActive}
            />

            {/* <div className='fotter'>
              Rishintentions
            </div> */}
            <div onClick={() => setCartActive(true)} className='cart-btn'>
              {cartCount !== null &&
                <div className='cart-count'>{cartCount}</div>
              }
              <Icon icon="solar:cart-outline" />
            </div>
          </>
      }
    </div>
  )
}

export default Store
import React, { useEffect, useState } from 'react'
import "./Store.css"
import Slider from '../../components/Slider/Slider'
import FlashSale from '../../components/FlashSale/FlashSale'
import CategoryNav from '../../components/CategoryNav/CategoryNav'
import ProductGallery from '../../components/ProductGallery/ProductGallery'

const Store = ({ data, setData }) => {

  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    if (data === null) {
      console.log('fetched');
      fetch('http://localhost:4000/store-home')
        .then(res => res.json())
        .then(data => { setData(data); setLoading(false); console.log(data) })
        .catch(err => console.log(err))
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        loading
          ?
          <>loading..</>
          :
          <>
            {data.slider_images &&
              <Slider
                slider_images={data.slider_images}
              />
            }

            {data.flash_sale && <FlashSale flash_sale={data.flash_sale} />}

            <CategoryNav
              category={data.category}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <ProductGallery
              category={data.category[activeCategory]}
              products={data.products}
              activeCategory={activeCategory}
            />

            {/* <div className='fotter'>
              Rishintentions
            </div> */}
          </>
      }
    </>
  )
}

export default Store
import React, { useState } from 'react'
import "./ProductPage.css"
import { useParams } from 'react-router-dom'

const ProductPage = ({ products }) => {

  const { category, id } = useParams()
  const [activeColor,setActiveColor] = useState(0)

  return (
    <>
      <div>{"Store / " + category + " / " + products && products[id]?.name}</div>
      <div>
      </div>
    </>
  )
}

export default ProductPage
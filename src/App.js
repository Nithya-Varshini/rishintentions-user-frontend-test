import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import ProductPage from './pages/ProductPage/ProductPage'
import Nav from './components/Nav/Nav';
import Booking from './pages/Booking/Booking'
import Cart from './components/Cart/Cart'
import About from './pages/About/About'
import Checkout from './pages/Checkout/Checkout'
import Programs from './pages/Programs/Programs'
import Popup from './components/Popup/Popup'

const App = () => {
  const [storeData, setStoreData] = useState(null);
  const [cartActive,setCartActive] = useState(false)
  const [popup,setPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPopup(true)
    },5000)
  },[])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store data={storeData} setData={setStoreData}  setCartActive={setCartActive} />} />
        <Route path='/product/:category/:id' element={<ProductPage products={storeData?.products} setData={setStoreData} setCartActive={setCartActive}/>} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Programs />} />
      </Routes>
      <Cart cartActive={cartActive} setCartActive={setCartActive} products={storeData?.products}/>
      {popup && <Popup setPopup={setPopup}/>}
    </BrowserRouter>
  )
}

export default App
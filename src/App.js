import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
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
  const [cartActive, setCartActive] = useState(false)
  const [popup, setPopup] = useState(false)
  const [cartCount, setCartCount] = useState(null)

  const fetchStoreData = (setLoading) => {
    if (storeData === null) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/store-home`)
        .then(res => res.json())
        .then(data => { setStoreData(data); setLoading(false); console.log(data) })
        .catch(err => console.log(err))
    } else {
      setLoading(false)
    }
  }

  const fetchCartCount = () => {
    let cart = localStorage.getItem('cart')
    if (cart !== undefined)
      setCartCount(Object.keys(JSON.parse(cart)).length)
    else
      setCartCount(0)
  }

  useEffect(() => {
    setTimeout(() => {
      setPopup(true)
    }, 5000)
  }, [])

  const initialOptions = {
    clientId: 'test',
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store/:LinkCategory?' element={<Store storeData={storeData} setStoreData={setStoreData} setCartActive={setCartActive} fetchStoreData={fetchStoreData} cartCount={cartCount} fetchCartCount={fetchCartCount} />} />
          <Route path='/product/:category/:id' element={<ProductPage products={storeData?.products} setData={setStoreData} setCartActive={setCartActive} fetchStoreData={fetchStoreData} cartCount={cartCount} fetchCartCount={fetchCartCount} />} />
          <Route path='/checkout' element={<Checkout products={storeData?.products} fetchStoreData={fetchStoreData} />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/about' element={<About />} />
          <Route path='/programs' element={<Programs />} />
        </Routes>
        <Cart cartActive={cartActive} setCartActive={setCartActive} products={storeData?.products} fetchCartCount={fetchCartCount}/>
        {popup && <Popup setPopup={setPopup} />}
      </BrowserRouter>
    </PayPalScriptProvider>
  )
}

export default App
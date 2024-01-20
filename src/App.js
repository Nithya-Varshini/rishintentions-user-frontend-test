import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import ProductPage from './pages/ProductPage/ProductPage'
import Nav from './components/Nav/Nav';
import Booking from './pages/Booking/Booking'
import Cart from './components/Cart/Cart'
// import SampleStore from './pages/SampleStore/SampleStore'

const App = () => {
  const [storeData, setStoreData] = useState(null);
  const [cartActive,setCartActive] = useState(false)
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store data={storeData} setData={setStoreData}  setCartActive={setCartActive} />} />
        {/* <Route path='/store' element={<SampleStore data={storeData} setData={setStoreData}/>} /> */}
        <Route path='/product/:category/:id' element={<ProductPage products={storeData?.products} setData={setStoreData} setCartActive={setCartActive}/>} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
      <Cart cartActive={cartActive} setCartActive={setCartActive} products={storeData?.products}/>
    </BrowserRouter>
  )
}

export default App
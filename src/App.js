import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import ProductPage from './pages/ProductPage/ProductPage'
import Nav from './components/Nav/Nav';
import Booking from './pages/Booking/Booking'

const App = () => {
  const [storeData, setStoreData] = useState(null);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store data={storeData} setData={setStoreData} />} />
        <Route path='/product/:category/:id' element={<ProductPage products={storeData?.products}/>} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
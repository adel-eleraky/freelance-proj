import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Completed from './pages/Completed'
import ReactPixel from 'react-facebook-pixel';
import First from './pages/First'

function App() {

const pixelId = import.meta.env.VITE_PIXEL_ID;

  useEffect(() => {
    // Initialize Meta Pixel
    const options = { autoConfig: true, debug: true };
    ReactPixel.init(pixelId, options);

    console.log("pixel id" , pixelId)
    ReactPixel.pageView(); // Track page views
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path='completed' element={<Completed />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

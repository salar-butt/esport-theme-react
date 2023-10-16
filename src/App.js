import React, { Component } from 'react'
import {  Routes, Route } from 'react-router-dom';
import Header from './HomeScrComp/Header'
import Home from './Screens/Home'
import News from './Screens/News'
import Videos from './Screens/Videos'
import SpecialScr from './Screens/SpecialScr'
import ShopScr from './Screens/ShopScr'
import Footer from './HomeScrComp/Footer'

export default class App extends Component {
  render() {
    return (
      <>
          <Header />
           <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/special_deals' element={<SpecialScr/>} />
          <Route path='/shop' element={<ShopScr/>} />
            </Routes> 
          <Footer />
      </>
    )
  }
}

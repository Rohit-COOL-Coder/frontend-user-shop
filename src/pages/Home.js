import React from 'react'
import Annousment from '../componemts/Annousment'
import Categories from '../componemts/Categories'
import Footer from '../componemts/Footer'
import Navbar from '../componemts/Navbar'
import Newslatter from '../componemts/Newslatter'
import Products from '../componemts/Products'
import Slider from '../componemts/Slider'

function Home() {
  return (
<div>
    <Annousment/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <Newslatter/>
    <Footer/>
</div>
  )
}

export default Home
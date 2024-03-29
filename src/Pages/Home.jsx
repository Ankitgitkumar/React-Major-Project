import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar' 
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'



export default function Home() {
  return (
    <div>
    <Announcement />
      <Navbar />
      <Slider />
      <Categories/>
      <Products />
    </div>
  )
}

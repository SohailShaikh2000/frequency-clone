import React from 'react'
import Navbar from '../../components/layout/header/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import FeaturedNav from './components/featuredNavbar/FeaturedNav'
import '../../App.scss'

const Featured = () => {
  return (
    <div className='featured-wrapper'>
      <div className='featured-container'>
        <Navbar />
        <Dashboard />
        <FeaturedNav />
      </div>
    </div>
  )
}

export default Featured
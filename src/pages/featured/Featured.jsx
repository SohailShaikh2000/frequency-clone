import React from 'react'
import Navbar from '../featured/components/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import '../../App.scss'

const Featured = () => {
  return (
    <div className='featured-wrapper'>
      <div className='featured-container'>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  )
}

export default Featured
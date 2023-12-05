import React from 'react'

import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Router from '../router/Router'

const Layout = () =>
{
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar />
      <Router />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
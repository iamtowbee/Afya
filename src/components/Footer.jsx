import React, { useState } from 'react'
// import Logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

const Footer = () =>
{
  return (
    <footer className='bg-dark p-16'>
      <div className='flex items-start justify-evenly'>
        <div className="flex flex-col text-white gap-6">
          <h3 className='font-bold text-lg'>Company</h3>
          <div className="flex flex-col gap-1">
            <Link to="/">About Us</Link>
            <Link to="/">FAQs</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Careers</Link>
          </div>
        </div>

        <div className="flex flex-col text-white gap-6">
          <h3 className='font-bold text-lg'>Legal</h3>
          <div className="flex flex-col gap-1">
            <Link to="/">Terms of Use</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Legal Notice</Link>
            <Link to="/">Do Not Share My Info</Link>
            <Link to="/">Cookie Policy</Link>
          </div>
        </div>

        <div className="flex flex-col text-white gap-6">
          <h3 className='font-bold text-lg'>Get In Touch</h3>
          <div className="flex flex-col gap-6">
            <Link to="/" className='flex items-center gap-2'>
              <ion-icon name="call-outline" className="text-[64px]"></ion-icon>
              <p>(+234) 810-245-6564</p>
            </Link>
            <Link to="/" className='flex items-center gap-2'>
              <ion-icon name="location-outline"></ion-icon>
              <p>Marina Lagos, Nigeria 340241</p>
            </Link>
            <Link to="/" className='flex items-center gap-2'>
              <ion-icon name="mail-outline"></ion-icon>
              <p>hello@afya.io</p>
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
export default Footer
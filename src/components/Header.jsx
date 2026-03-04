import React from 'react'
import logo from "../assets/logo.png"

function Header() {
  return (
    <div className="header p-6 flex justify-between items-center bg-transparent relative z-20">
      <img className='w-32 h-auto' src={logo} alt="Logo" />

      <ul className="list-none flex justify-between gap-8 text-white text-center items-center text-lg lg:text-xl">
        <li className='cursor-pointer hover:text-[#f48915] transition-colors'>Home</li>
        <li className='cursor-pointer hover:text-[#f48915] transition-colors'>Programs</li>
        <li className='cursor-pointer hover:text-[#f48915] transition-colors'>Why Us</li>
        <li className='cursor-pointer hover:text-[#f48915] transition-colors'>Plans</li>
        <li className='cursor-pointer hover:text-[#f48915] transition-colors'>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header

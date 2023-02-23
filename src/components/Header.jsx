import React from 'react'
import Logo from '/logo.svg'

const Header = () => {
  return (
    <header className='flex justify-between px-[15%] py-5'>
        <div className='flex items-center'>
            <img src={"/logo.png"} className='w-10 h-10 mr-4' alt="" />
            <h3 className="text-4xl font-bold text-white">Railway</h3>
        </div>
        <nav className="flex items-center">
            <a href="#" className='text-[#788393] font-medium mr-8'>Blog</a>
            <a href="#" className='text-[#788393] font-medium mr-8'>Docs</a>
            <a href="#" className='text-[#788393] font-medium mr-8'>About</a>
            <a href="#" className='text-[#788393] font-medium mr-8'>Help</a>
            <a href="#" className='text-[#788393] font-medium mr-8'>Careers</a>
            <a href="#" className='text-[#788393] font-medium mr-8'>Pricing</a>
            <a href="#" className='text-[#788393] font-medium mr-8'>Login</a>
        </nav>
    </header>
  )
}

export default Header
import React from 'react'
import ThemeSwitcher from './them'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Navbar = () => {
  return (

    <header className='bg-[#f1f4c6] text-black dark:bg-[#212121] dark:text-white py-4 p-2 lg:px-5 shadow-sm border-b-[.1px] flex justify-between items-center'>
      <NavLink to='/' className=" flex gap-1 items-center">
        <img className='h-7' src="/img/doc.png" alt="" />
        <h1 className=' font-libre font-extrabold text-2xl'>Docs Tool</h1>
      </NavLink>
      <div className="flex justify-center items-center gap-2">
        <ThemeSwitcher/>

        <div className="hidden lg:flex justify-center items-center">
          <NavLink to='/login' className="text-base px-3 ">Login </NavLink>
          <NavLink to='/register' className="text-base px-4 py-1 bg-[#837d7d] dark:bg-[#5454c5] rounded-md ">Sing up </NavLink>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </div>
    </header>
  )
}

export default Navbar
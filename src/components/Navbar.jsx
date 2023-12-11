import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="bg-white w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>SH</p>
        </NavLink>
        {/*<nav className='text-lg flex gap-7 font-medium'>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Project
            </NavLink>
        </nav>*/}
        
    </header>
  )
}

export default Navbar
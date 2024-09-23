import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import logo from '../assets/logo-black.png'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <Link to={"/List"} className='link'>
          <div className="menubar">
            <img src={logo} alt="logo" className='logo'/>
          </div>  
      </Link> 
    </div>
    </> 
  )
}

export default Navbar
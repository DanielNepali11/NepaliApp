import React from 'react'
import './Navbar.css'
import Logo from '../assets/fifa-lover-logo.png'
import SearchLogo from '../assets/search-w.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="" className='logo'/>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
    
    <div className='search-box'>
        <input type="text" placeholder='Search for players' />
        <img src={SearchLogo} alt="" className='search-logo' />
    </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
    <div className='logo'>
      <h2>MoviFy</h2>
    </div>
    <div className='search'>
     <input type="text" placeholder='search shows...' />
     <i className="fa-solid fa-magnifying-glass"></i>
    </div>
      
    </nav>
  )
}

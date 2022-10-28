import './Navbar.css' ;
import React from 'react'


const Navbar= () => {
    return (
        <nav className="navbar">
            <ul className='navbarList'>
                <div className='navbarList__leftItem'>
                <li className="navbar__Items"><b>Your Blog</b></li>
                <li className="navbar__Items">Home</li>
                <li className="navbar__Items">About us</li>
                <li className="navbar__Items">Create</li>
                </div>
               
            </ul>
        </nav>
    )
}

export default Navbar;
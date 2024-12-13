import React from 'react'
import { FiLogIn } from "react-icons/fi";
import { LuContact } from 'react-icons/lu';
import { TbGardenCartFilled } from 'react-icons/tb';
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='logo'>Crystal Shop</div>
            <div className='nav-link'>
                <ul>
                <li><a>Home</a></li>
                <li><a>Products</a></li>
                <li><a>About</a></li>
                <li><a>Contacts</a></li>
                </ul>
            </div>
            <div className='buttons'>
                <button><FiLogIn/>Sign-In</button>
                <button><LuContact/>Sign-Up</button>
                <button><TbGardenCartFilled/>Cart</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
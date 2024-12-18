import React from 'react'

// navbars
import NavbarDefault from './navbarDefault'
import NavbarMobile from './navbarMobile'

const Navbar = () => {
  return (
    <div className='bg-[#000] w-full h-auto lg:h-[80px] flex justify-center items-center'>
        <NavbarDefault/>
        <NavbarMobile/>
    </div>
  )
}

export default Navbar
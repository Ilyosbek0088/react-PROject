import React from 'react'

// navbars
import NavbarDefault from './navbarDefault'
import NavbarMobile from './navbarMobile'

const Navbar = () => {
  return (
    <div className='fixed z-10 border-[2px] border-solid border-b-slate-400 backdrop-blur-md bg-[transparent] w-full h-auto lg:h-[80px] flex justify-center items-center'>
        <NavbarDefault/>
        <NavbarMobile/>
    </div>
  )
}

export default Navbar
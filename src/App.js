import React, { lazy } from 'react'

// navbar and footer components
import Navbar from "./components/navbar"
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(()=> import('./pages/home/home.js'))
const About = lazy(()=> import('./pages/about/about.js'))
const Products = lazy(()=> import('./pages/products/products.js'))
const Contact = lazy(()=> import('./pages/contact/contact.js'))
const Login = lazy(()=> import('./pages/login/login.js'))
const Register = lazy(()=> import('./pages/register/register.js'))
const Cart = lazy(()=> import('./pages/cart/cart.js'))
const Error = lazy(()=> import('./pages/error/error.js'))


const App = () => {
  return (
    <div>
      <Navbar/>
<div className='pt-20 '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
        {/* <Route path='*' element={<h1>Page not Found</h1>}/> */}
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
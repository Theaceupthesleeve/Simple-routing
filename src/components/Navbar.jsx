import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <p><Link to={'/'}>Home</Link></p>
        <p><Link to={'about'}>About</Link></p>
        <p><Link to={'contact'}>Contact</Link></p>
        <p><Link to={'service'}>Services</Link></p>
        <p><Link to={'product'}>Product</Link></p>
    </div>
  )
}

export default Navbar
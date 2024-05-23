import React, { useEffect, useState } from 'react'
import'./Navbar.css'
import logo from'../../assets/logo.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu-icon.png'

const Navbar = () => {
  const[sticky,setsticky]=useState(false);

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
       window.scrollY>450?setsticky(true):setsticky(false);
      })
  },[]);
  const [mobileMenu, setmobileMenu]=useState(false)
  const toggleMenu=()=>{
   mobileMenu?setmobileMenu(false):setmobileMenu(true);
  }
  return (
<nav className={`container ${sticky?'dark-nav':''}`}>
    <img src={logo} alt="" className='logo'/>
    <ul >
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program'smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about'smooth={true} offset={-150} duration={500}>About US</Link></li>
        <li><Link to='campus'smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='contact'smooth={true} offset={-260} duration={500} className='btn'>Contact US</Link></li>
      
    </ul>
    <img src={menu} alt='' className='menu-icon'onClick={toggleMenu}/>
</nav>
  )
}

export default Navbar


import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import {SiAnaconda} from "react-icons/si"
import {AiOutlineBars} from "react-icons/ai"
import {RiCloseLine} from "react-icons/ri"
import Button from '../UI/button/Button'
import "../UI/button/Button.css"


const Navbar = () => {
    const[showMenu, setShowMenu] = useState (false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <nav className='container navbar'>
      <div className='logo'>
        <SiAnaconda color='green' size={33}/>
        <p className='logo-text'>
            Legon <span>UGPH</span>
        </p>
      </div>

      <menu>
        <ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
            <li>
                <a href='#'>Home</a>
                </li>
            <li>
                <a href='#footer'>Connect</a>
            </li>
            <li>
                <a href='#download'>Events</a>
                </li>
            <li>
                <a href='#subscribe'>Contact Us</a>
                </li>
            <li className='nav-btn'>
                <a href='#faq' className='btn btn-dark'>About Us</a>
                </li>
  
               {/* <li className='btn nav-btn'>
                  <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"}/>
                </li>
  */}


        </ul>
      </menu>
      <div className='menu-icons' onClick = {toggleMenu}>
        {
            showMenu ? <RiCloseLine color='#fff' size={30}/> :<AiOutlineBars color='#fff' size={27}/>
        }
      </div>
        
    </nav>
  )
}

export default Navbar

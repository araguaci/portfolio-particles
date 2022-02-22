import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import MobileNav from '../mobileNav/MobileNav'

const Navbar = () => {
  const [mobilenavVisible, setMobilenavVisible] = useState(false)
  const [hamburgerClass, setHamburgerClass] = useState('')
  const toggleMobilenavVisible = () => {
    setMobilenavVisible(!mobilenavVisible)
    if (hamburgerClass === '') {
      setHamburgerClass('open')
    } else {
      setHamburgerClass('')
    }
  }
  return (
    <div className="navbar">
      <div className="navlinks">
        <div className="navlink-wrapper">
          <Link to="home" spy={true} smooth={true} duration={500}>
            início
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="sobre" spy={true} smooth={true} duration={500}>
            sobre
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            portfolio
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="projetos" spy={true} smooth={true} duration={500}>
            projetos
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            contato
          </Link>
        </div>
      </div>
      <div className="hamburger">
        <div
          id="hamburger-icon"
          className={hamburgerClass}
          onClick={toggleMobilenavVisible}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <MobileNav
        toggleMobilenavVisible={toggleMobilenavVisible}
        mobilenavVisible={mobilenavVisible}
      />
    </div>
  )
}

export default Navbar

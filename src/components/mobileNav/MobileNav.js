import React from 'react'
import './MobileNav.css'
import { Link } from 'react-scroll'

const MobileNav = ({ toggleMobilenavVisible, mobilenavVisible }) => {
  return (
    <div className="mobilenav-wrapper">
      <div className={'mobilenav ' + (mobilenavVisible ? 'on' : 'off')}>
        <div className="mobilenavlinks">
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              início
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              sobre
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              portfolio
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="projetos"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              projetos
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="contato"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav

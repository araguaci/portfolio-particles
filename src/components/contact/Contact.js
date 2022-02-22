import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import linkedin from '../../images/social/linkedin.png'
import instagram from '../../images/social/instagram.png'
import facebook from '../../images/social/facebook.png'

const Contact = () => {
  return (
    <div className="contact">
    <Section title="Contato" className="contact">
      <Bounce cascade>
        <div className="links">
          <a
            href="https://www.instagram.com/araguaciandrade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/araguaci/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://www.facebook.com/artesdosulweb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
    </div>
  )
}

export default Contact

import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p className="copyright">
        <a href="https://www.buymeacoffee.com/araguaci" title="buy me a coffee"> <img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" height="50" width="210" alt="buy me a coffee" /></a>
        <a href="https://www.patreon.com/artesdosul" title="patreon"> <img align="center" src="https://scontent.fnvt6-1.fna.fbcdn.net/v/t1.6435-9/s960x960/167098552_4103612363030377_5105348181055557331_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=a4pfk8xucgkAX_kAPiv&_nc_ht=scontent.fnvt6-1.fna&oh=00_AT84qoxAwvkGe781h_n_mmKxojV55hLoVkbNIou-U7l7CQ&oe=6238A3CB" height="50" width="210" alt="patreon" /></a>
        
      </p>
      <p className="copyright">
        Com{' '}
        <span role="img" aria-label="thinking">
          ❤️
        </span>{' '}
        por <a
                href="http://www.artesdosul.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#04defc',
                  cursor: 'pointer',
                }}
              > Artes do Sul </a> / <a
                href="https://www.instagram.com/araguaciandrade/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#04defc',
                  cursor: 'pointer',
                }}
              >
                @Araguaci
              </a>
      </p>
    </footer>
  )
}

export default Footer

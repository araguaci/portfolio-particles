import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p className="copyright">
        <a href="https://www.buymeacoffee.com/araguaci" title="buy me a coffee">
          {' '}
          <img
            align="center"
            src="https://badgen.net/badge/icon/buymeacoffee?icon=buymeacoffee&color=yellow"
            alt="buy me a coffee"
          />
        </a>{' '}
        <span role="img" aria-label="thinking">
          🔷
        </span>{' '}
        <a href="https://www.patreon.com/artesdosul" title="patreon">
          {' '}
          <img
            align="center"
            src="https://badgen.net/badge/icon/patreon?icon=patreon&color=orange"
            alt="patreon"
          />
        </a>
      </p>
      <p className="copyright">
        Com{' '}
        <span role="img" aria-label="thinking">
          ❤️
        </span>{' '}
        por{' '}
        <a
          href="http://www.artesdosul.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#ffdf00',
            cursor: 'pointer',
          }}
        >
          {' '}
          Artes do Sul{' '}
        </a>{' '}
        /{' '}
        <a
          href="https://www.instagram.com/araguaci.andrade/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#ffdf00',
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

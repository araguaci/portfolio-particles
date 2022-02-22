import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'
import kokopelli from '../../images/kokopelli-artesdosul.png'

const About = () => {
  return (
    <div className="about">
    <Section title="Sobre">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Sobre mim?</h2>
            <p>
              Ola, sou Araguaci{' '}
              <span role="img" aria-label="lightning">
              👨‍🎓
              </span>{' '} Analista de Sistemas (1998).
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                Eu amo
              </p>
              <Typewriter
                options={{
                  strings: [
                    'aprender novas tecnologias',
                    'aprimorar visual',
                    'resolver problemas',
                    'criar soluções',
                    'melhorar performance',
                    'aplicar inovações',
                    'colaborar com a comunidade',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              Desde 1996, atuo com programação na criação de sistemas especialistas e soluções para internet. 
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              Busca constante por inovação, conhecimento, usando a criatividade para aplicar em soluções, promoção e suporte a modernas iniciativas.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              Tecnologias desktop, webpack, JavaScript, React, Vue, Node para profissionais e empresas de pequeno e médio porte.
            </p>            
            <p>
              Estudando constantemente para manter competência dentro das novidades e dos recursos mais modernos e eficientes. {' '}
              Criação de novos <Link
                className="textLink"
                to="projetos"
                spy={true}
                smooth={true}
                duration={500}
              >
                projetos
              </Link>
              , e também no {' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                patrocínio, apoio e trabalho voluntário
              </Link>
              , para diferentes profissionais e equipes cooperativas.
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Santa Catarina, Brasil</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
      <p>
        <span className="wave-emoji" role="img" aria-label="waving hand"><img src={kokopelli} alt="kokopelli" width="55px" className="kokopelli" /></span>
      </p>
    </div>
  )
}

export default About

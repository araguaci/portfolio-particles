import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import ExperienceCard from '../experienceCard/ExperienceCard'
import experienceData from '../../data/experience.json'
import kokopelli from '../../images/kokopelli.png'

const Experience = () => {
  return (
    <div className="experience">
    <Section title="Portfolio">
      <div className="experience-content">
        <ul className="experience-list">
          {experienceData.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
        <Fade bottom duration={1200} distance="20px">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
          </div>
        </Fade>
      </div>
    </Section>
      <p className='kokopellip'>
        <span className="wave-emoji" role="img" aria-label="waving hand"><img src={kokopelli} alt="kokopelli kokopellip" width="55px" /></span>
      </p>
    </div>
)
}

export default Experience

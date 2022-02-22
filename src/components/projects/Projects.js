import React from 'react'
import './Projects.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import ProjectsCard from '../projectsCard/ProjectsCard'
import projestsData from '../../data/projects.json'
import kokopelli from '../../images/kokopelli-tribal.png'

const Projects = () => {
  return (
    <div className="projetcs">
    <Section title="Projetos">
      <div className="projetcs-content">
        <ul className="projetcs-list">
          {projestsData.projects.reverse().map((exp) => (
            <li key={`projects-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ProjectsCard projects={exp} />
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
    <p>
      <span className="wave-emoji" role="img" aria-label="waving hand"><img src={kokopelli} alt="kokopelli" width="55px" className="kokopelli" /></span>
    </p>
    </div>
  )
}

export default Projects

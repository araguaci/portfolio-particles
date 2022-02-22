import React from 'react'
import './ProjectsCard.css'

const ProjectsCard = ({ projects }) => {
  let { link, company, title, info, stack } = projects
  return (
    <a
      className="projects-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="projects-card-wrapper">
        <div className="projects-card">
          <div className="projects-card-top">
            <div
              className="projects-bg"
              style={{ background: projects.colourPrimary }}
            ></div>
            <h2>{company}</h2>
            <div className="image-wrapper">
              <div
                className="projects-bg logo-bg"
                style={{
                  background: projects.colourSecondary
                    ? projects.colourSecondary
                    : projects.colourPrimary,
                }}
              ></div>
              <img
                className="company-logo"
                src={require(`../../images/logos/${company
                  .replace(/ /g, '')
                  .toLowerCase()}.png`)}
                alt={`${company}-logo`}
                style={
                  projects.logoheight
                    ? {
                        height: `${projects.logoheight}%`,
                      }
                    : { width: `${projects.logowidth}%` }
                }
              />
            </div>
          </div>
          <div className="projects-card-bottom">
            <div>
              <h3>{title}</h3>
              <ul>
                {info.map((point, idx) => (
                  <li key={`${company}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="projects-card-tech">
              <ul>
                {stack.map((tech) => (
                  <li key={`${company}-${tech}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectsCard

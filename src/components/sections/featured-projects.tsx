import Link from 'next/link'
import { projects } from '@/lib/resume'

export function FeaturedProjects() {
  return (
    <section className="section" aria-labelledby="work-title">
      <div className="container">
        <div className="head head--split">
          <h2 id="work-title">Three things I built in 2025</h2>
          <p className="lead">A ride-share backend, a threat model and a chat server in C++.</p>
        </div>

        <ol className="work-list">
          {projects.map((project) => (
            <li key={project.title} className="grid-12 work-row">
              <p className="work-row__when">{project.year}</p>
              <div className="work-row__main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="stack">{project.tags.slice(0, 5).join(', ')}</p>
              </div>
              <p className="work-row__fig">
                <b>{project.reading.value}</b>
                <span>{project.reading.label}</span>
              </p>
              <div className="work-row__links">
                <a className="link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
                {project.liveUrl !== '#' && (
                  <a className="link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live demo
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="more">
          <Link href="/projects" className="btn">
            View all projects
          </Link>
        </p>
      </div>
    </section>
  )
}

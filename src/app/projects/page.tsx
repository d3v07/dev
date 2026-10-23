import Link from 'next/link'
import { contact, projects } from '@/lib/resume'

export const metadata = {
  title: 'Projects | Dev Trivedi',
  description:
    'Portfolio of software development projects including web applications, machine learning systems, and systems programming.',
}

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="projects-title">
        <div className="grid-12 container">
          <h1 id="projects-title">Projects</h1>
          <div className="page-hero__side">
            <p className="lead">
              Full-stack, machine learning and systems work, with the numbers each hit.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid-12 case"
              aria-labelledby={`project-${index}`}
            >
              <div className="case__text">
                <p className="when">{project.date}</p>
                <h2 id={`project-${index}`}>{project.title}</h2>
                <p>{project.longDescription}</p>
                <div className="actions">
                  <a
                    className="btn"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code
                  </a>
                  {project.liveUrl !== '#' && (
                    <a
                      className="btn"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>

              <figure
                className="case__panel"
                aria-label={`${project.title}, key highlights`}
              >
                <div className="panels">
                  <div className="case__panel-top">
                    <span>Key highlights</span>
                    <span>{project.year}</span>
                  </div>
                  <ul>
                    {project.highlights.map((h) => (
                      <li key={h.text}>
                        {h.figure ? (
                          <>
                            <b>{h.figure}</b> {h.text}
                          </>
                        ) : (
                          h.text
                        )}
                      </li>
                    ))}
                  </ul>
                  <dl className="case__panel-stack">
                    <dt>Technologies</dt>
                    <dd>{project.tags.join(', ')}</dd>
                  </dl>
                </div>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="section band" aria-labelledby="projects-close">
        <div className="grid-12 close container">
          <div className="close__main">
            <h2 id="projects-close">Interested in working together?</h2>
            <p className="lead">
              I&rsquo;m always open to discussing new projects and
              opportunities.
            </p>
            <div className="actions">
              <Link href="/contact" className="btn btn--primary">
                Get in touch
              </Link>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View GitHub
              </a>
            </div>
          </div>
          <dl className="close__facts">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="link">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{contact.location}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import { contact, education, experience, leadership } from '@/lib/resume'

export const metadata = {
  title: 'About | Dev Trivedi',
  description:
    'Learn more about Dev Trivedi - Software Development Engineer, MS in Computer Science student at NJIT.',
}

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-title">
        <div className="grid-12 container">
          <h1 id="about-title">About me</h1>
          <div className="page-hero__side">
            <p className="lead">
              Software development engineer, MS in Computer Science at NJIT.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid-12 bio container">
          <div className="bio__text">
            <p>
              Hi, I&rsquo;m <strong>Dev Trivedi</strong>, a Software Development
              Engineer and Master&rsquo;s student at New Jersey Institute of
              Technology with a 4.0 GPA.
            </p>
            <p>
              I build scalable full-stack applications with the MERN stack, AWS
              cloud services and C++: optimizing database queries, implementing
              machine learning models, designing system architectures.
            </p>
            <p>
              In over 1.5 years of professional experience I&rsquo;ve
              contributed to production systems, shipped 20+ features and moved
              performance numbers you can read on this site. I work best in
              Agile teams that ship often.
            </p>
          </div>

          <dl className="bio__facts">
            <div>
              <dt>Location</dt>
              <dd>{contact.location}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="link">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  linkedin.com/in/trivedi-dev
                </a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  github.com/d3v07
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section band" aria-labelledby="exp-title">
        <div className="grid-12 trail-wrap container">
          <div className="head">
            <h2 id="exp-title">Work experience</h2>
          </div>
          <ol className="trail">
            {experience.map((job) => (
              <li key={job.company}>
                <p className="when">{job.period}</p>
                <h3>{job.position}</h3>
                <p className="trail__org">
                  {job.company}, {job.location.toLowerCase()}
                </p>
                <ul className="trail__points">
                  {job.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="edu-title">
        <div className="grid-12 trail-wrap container">
          <div className="head">
            <h2 id="edu-title">Education</h2>
          </div>
          <ol className="trail">
            {education.map((edu) => (
              <li key={edu.school}>
                <p className="when">{edu.period}</p>
                <h3>{edu.degree}</h3>
                <p className="trail__org">
                  {edu.school}, {edu.location}
                  {edu.gpa && <>. GPA {edu.gpa}</>}
                </p>
                <p className="courses">
                  <span>Relevant coursework: </span>
                  {edu.coursework.join(', ')}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section--s" aria-labelledby="lead-title">
        <div className="container">
          <div className="head">
            <h2 id="lead-title">Leadership and activities</h2>
          </div>
          <div className="panels lead-grid">
            {leadership.map((item) => (
              <div key={item.title}>
                <p className="when">
                  {item.date}, {item.location}
                </p>
                <h3>{item.title}</h3>
                <p className="trail__org">{item.organization}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="about-close">
        <div className="grid-12 close container">
          <div className="close__main">
            <h2 id="about-close">Let&rsquo;s connect</h2>
            <p className="lead">
              I&rsquo;m always interested in hearing about new opportunities and
              interesting projects.
            </p>
            <div className="actions">
              <Link href="/contact" className="btn btn--primary">
                Get in touch
              </Link>
              <a href={contact.resume} download className="btn">
                Download resume
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

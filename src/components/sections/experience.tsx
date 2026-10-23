import Link from 'next/link'
import { education, experience } from '@/lib/resume'

export function Experience() {
  const nj = education[0]

  return (
    <section className="section--l" aria-labelledby="trail-title">
      <div className="container grid-12 trail-wrap">
        <div className="head">
          <h2 id="trail-title">Where I have shipped</h2>
          <p className="lead">Two remote engineering roles, then a master&rsquo;s.</p>
          <p>
            <Link href="/about" className="link">
              The full history
            </Link>
          </p>
        </div>

        <ol className="trail">
          <li>
            <p className="when">{nj.period}</p>
            <h3>{nj.degree}</h3>
            <p className="trail__org">{nj.school}, GPA {nj.gpa}</p>
          </li>
          {experience.map((job) => (
            <li key={job.company}>
              <p className="when">{job.period}</p>
              <h3>{job.position}</h3>
              <p className="trail__org">
                {job.company}, {job.location.toLowerCase()}
              </p>
              <p className="trail__line">{job.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

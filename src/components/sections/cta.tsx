import Link from 'next/link'
import { contact } from '@/lib/resume'

export function CTA() {
  return (
    <section className="section band" aria-labelledby="close-title">
      <div className="container grid-12 close">
        <div className="close__main">
          <h2 id="close-title">Hiring? Write to me.</h2>
          <a className="close__mail" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <div className="actions">
            <Link href="/contact" className="btn">
              Get in touch
            </Link>
            <a href={`mailto:${contact.email}`} className="btn">
              Schedule a call
            </a>
          </div>
        </div>

        <dl className="close__facts">
          <div>
            <dt>Status</dt>
            <dd>Available for opportunities</dd>
          </div>
          <div>
            <dt>Reply</dt>
            <dd>Typically within 24 hours</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>New Jersey</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

import Link from 'next/link'

export function Hero() {
  return (
    <section className="ledge" aria-labelledby="hero-title">
      <div className="container ledge__inner">
        <div className="ledge__field">
          <figure className="reading-panel" aria-label="A measured result from Nuance Media">
            <div className="panels">
              <div className="reading__top">
                <strong>MongoDB query latency</strong>
                <span>Nuance Media</span>
              </div>
              <div className="reading__value">
                <s className="reading__was" aria-label="was 400 milliseconds">400 ms</s>
                <span className="reading">180 ms</span>
              </div>
              <dl className="reading__meta">
                <dt>Who</dt>
                <dd className="who">Dev Trivedi</dd>
              </dl>
              <dl className="reading__meta">
                <dt>When</dt>
                <dd className="when">2023 to 2024</dd>
              </dl>
              <dl className="reading__meta">
                <dt>Why</dt>
                <dd>Compound indexes on complex schemas</dd>
              </dl>
            </div>
          </figure>
        </div>

        <div className="grid-12 ledge__base">
          <h1 id="hero-title">Dev Trivedi, software development engineer</h1>
          <div className="ledge__aside">
            <p className="lead">
              NJIT master&rsquo;s student, GPA 4.0, building with MERN, AWS and C++.
            </p>
            <div className="actions">
              <Link href="/projects" className="btn btn--primary">
                View my work
              </Link>
              <Link href="/contact" className="btn">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

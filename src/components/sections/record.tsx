export function Record() {
  return (
    <section className="section--s band" aria-label="The record so far">
      <div className="container">
        <dl className="figures">
          <div>
            <dt>
              GPA at NJIT
              <span>MS in Computer Science</span>
            </dt>
            <dd>4.0</dd>
          </div>
          <div>
            <dt>
              Years of experience
              <span>RR Enterprise, Nuance Media</span>
            </dt>
            <dd>1.5+</dd>
          </div>
          <div>
            <dt>
              Features shipped
              <span>in Agile sprints at Nuance Media</span>
            </dt>
            <dd>20+</dd>
          </div>
          <div>
            <dt>
              Records processed
              <span>daily, S3 into MongoDB</span>
            </dt>
            <dd>10K+</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

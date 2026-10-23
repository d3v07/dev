import { skillCategories } from '@/lib/resume'

export function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title">
      <div className="container grid-12 rows-wrap">
        <div className="head">
          <h2 id="skills-title">What I build with</h2>
          <p className="lead">Always learning the next one.</p>
        </div>

        <dl className="rows">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <dt>{category.title}</dt>
              <dd>{category.skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

import { Code2, Database, Layout, Server, Cloud, TestTube } from 'lucide-react'

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JSON'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Django', 'System V IPC'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'DynamoDB', 'SQL Database'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    skills: ['AWS (EC2, S3, Lambda)', 'Azure', 'CloudWatch', 'Vercel', 'Amplify'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TestTube,
    title: 'DevOps & Testing',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Jest', 'Jira'],
    color: 'from-indigo-500 to-blue-500',
  },
]

export function Skills() {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg"
              >
                {/* Icon with gradient background */}
                <div className="mb-4 inline-flex">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                    <Icon className={`h-6 w-6 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-lg font-semibold mb-3">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-5`} />
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Always learning and exploring new technologies to stay at the forefront of web development
          </p>
        </div>
      </div>
    </section>
  )
}

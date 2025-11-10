import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Briefcase, GraduationCap, Award, Download, MapPin, Mail, Linkedin, Github } from 'lucide-react'

const experience = [
  {
    company: 'RR Enterprise',
    position: 'Software Development Engineer',
    location: 'Remote',
    period: 'July 2024 - December 2024',
    achievements: [
      'Engineered robust C++ AWS S3 ingestion pipeline processing 10,000 records daily into MongoDB, reducing manual effort',
      'Built dynamic React + Express dashboard on AWS Amplify providing managers insights into project timelines and budgets',
      'Designed secure, scalable Node.js REST APIs on AWS EC2 with Swagger + JWT, boosting cross-team data access by 75%',
      'Implemented comprehensive structured logging and automated health checks using CloudWatch, enabling service monitoring',
    ],
  },
  {
    company: 'Nuance Media',
    position: 'Software Development Engineer',
    location: 'Remote',
    period: 'September 2023 - May 2024',
    achievements: [
      'Delivered optimized React applications on Vercel with code-splitting, notably improving overall client campaign performance',
      'Optimized complex MongoDB schemas with compound indexes, reducing latency from 400ms to 180ms for faster insights',
      'Shipped 20+ critical features in Agile sprints using Jira, GitHub and Jest, ensuring testing and consistent high-quality deliverables',
      'Automated efficient build and deployment workflows with GitHub Actions for CI/CD, cutting release cycle time by 40%',
    ],
  },
]

const education = [
  {
    school: 'New Jersey Institute of Technology',
    degree: 'Master of Science in Computer Science',
    location: 'Newark, New Jersey',
    period: 'January 2025 - December 2026',
    gpa: '4.0',
    coursework: ['Operating Systems', 'Database Management System', 'Web Development', 'Machine Learning', 'Big Data'],
  },
  {
    school: 'Jawaharlal Nehru Technological University',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    location: 'Malla Reddy Engineering College, India',
    period: 'November 2020 - July 2024',
    coursework: ['Data Structures', 'Algorithms', 'Software Engineering', 'Computer Networks', 'Database Systems'],
  },
]

const leadership = [
  {
    title: 'Team Lead',
    organization: 'Qualcomm AI Hackathon, NYU',
    location: 'New York City',
    date: 'September 2025',
    description: 'Led a 4-member team to build an edge-based computer vision prototype with Qualcomm AI Stack',
  },
  {
    title: 'Event Coordinator',
    organization: 'NJIT GDG',
    location: 'Newark',
    date: 'April 2025',
    description: 'Organized coding workshop and peer-learning sessions for 40+ students, fostering collaboration in emerging technologies',
  },
]

export const metadata = {
  title: 'About | Dev Trivedi',
  description: 'Learn more about Dev Trivedi - Software Development Engineer, MS in Computer Science student at NJIT.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-blue-950/20 dark:via-violet-950/20 dark:to-pink-950/20" />

        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hi, I'm <span className="font-semibold text-foreground">Dev Trivedi</span>, a Software Development Engineer
                and Master's student at New Jersey Institute of Technology with a perfect 4.0 GPA.
              </p>
              <p>
                I specialize in building scalable full-stack applications using the MERN stack, AWS cloud services,
                and C++. My passion lies in solving complex problems through elegant code, whether it's optimizing
                database queries, implementing machine learning models, or designing robust system architectures.
              </p>
              <p>
                With over 1.5 years of professional experience, I've contributed to multiple production systems,
                shipped 20+ features, and improved system performance metrics significantly. I thrive in Agile
                environments and enjoy collaborating with cross-functional teams to deliver user-centric solutions.
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>New Jersey, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:trivedidev16@gmail.com" className="hover:text-blue-600 transition-colors">
                  trivedidev16@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a href="https://linkedin.com/in/trivedi-dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  linkedin.com/in/trivedi-dev
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <a href="https://github.com/d3v07" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  github.com/d3v07
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600 border-4 border-background" />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{job.position}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground mt-1">
                      <span className="font-semibold text-foreground">{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">▹</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-8 w-8 text-violet-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-violet-200 dark:border-violet-900">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-violet-600 border-4 border-background" />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground mt-1">
                      <span className="font-semibold text-foreground">{edu.school}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{edu.period}</span>
                      {edu.gpa && (
                        <>
                          <span>•</span>
                          <span className="font-semibold text-foreground">GPA: {edu.gpa}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="inline-flex items-center rounded-md bg-violet-50 dark:bg-violet-950/50 px-3 py-1 text-sm font-medium text-violet-700 dark:text-violet-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-12">
            <Award className="h-8 w-8 text-pink-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Leadership & Activities</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {leadership.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 space-y-3 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold text-foreground">{item.organization}</div>
                  <div>{item.location} • {item.date}</div>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-blue-950/30 dark:via-violet-950/30 dark:to-pink-950/30 p-12 text-center">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's Connect!
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always interested in hearing about new opportunities and interesting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/Dev Trivedi.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

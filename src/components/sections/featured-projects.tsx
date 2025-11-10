import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

// Real projects from Dev Trivedi's portfolio
const projects = [
  {
    title: 'Ride Share Platform',
    description: 'Full-stack ride-sharing MVP with geohash nearest-neighbor matching, OSRM routing, and real-time updates via Socket.IO. Achieved 90.4% uptime and sub-second ride matching latency.',
    image: '/projects/rideshare.svg',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'JWT'],
    liveUrl: '#',
    githubUrl: 'https://github.com/d3v07',
  },
  {
    title: 'Cyber Threat Predictor',
    description: 'ML-powered IIoT security system processing 2.1M network packets with 94.1% detection accuracy. Deployed federated learning pipeline improving cross-site AUC by 0.21.',
    image: '/projects/cyberthreat.svg',
    tags: ['Python', 'Django', 'SVM', 'Random Forest', 'ML'],
    liveUrl: '#',
    githubUrl: 'https://github.com/d3v07',
  },
  {
    title: 'ChatterBox',
    description: 'Terminal-based multi-user chat system built with C++ using System V IPC, RAII wrappers, and thread synchronization. Supports 50+ concurrent users with 0.4s average latency.',
    image: '/projects/chatterbox.svg',
    tags: ['C++', 'System V IPC', 'Threading', 'RAII'],
    liveUrl: '#',
    githubUrl: 'https://github.com/d3v07',
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of recent work showcasing my skills and expertise
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="aspect-video w-full relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950/50 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

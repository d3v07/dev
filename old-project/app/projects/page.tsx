import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Calendar } from 'lucide-react'

const projects = [
  {
    title: 'Ride Share Platform',
    description: 'Full-stack ride-sharing MVP with geohash nearest-neighbor matching, OSRM routing, and real-time updates via Socket.IO. Achieved 90.4% uptime and sub-second ride matching latency.',
    longDescription: 'Built a comprehensive ride-sharing platform using the MERN stack (MongoDB, Express, React, Node.js) with advanced features including JWT authentication, role-based access control, and real-time location tracking. Implemented geohash-based nearest-neighbor matching algorithm for efficient driver-rider pairing and integrated OSRM for optimal route calculation. The platform uses Socket.IO for real-time bidirectional communication between drivers and riders.',
    image: '/projects/rideshare.svg',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'JWT', 'Socket.IO', 'Vercel'],
    date: 'June 2025 - August 2025',
    highlights: [
      '90.4% uptime with containerized deployment',
      'Sub-second ride matching latency',
      'Real-time location updates',
      'Secure authentication with JWT',
    ],
    githubUrl: 'https://github.com/d3v07',
    liveUrl: '#',
  },
  {
    title: 'Cyber Threat Predictor',
    description: 'ML-powered IIoT security system processing 2.1M network packets with 94.1% detection accuracy. Deployed federated learning pipeline improving cross-site AUC by 0.21.',
    longDescription: 'Developed an advanced machine learning system for detecting cyber threats in Industrial IoT networks. Processed and analyzed 2.1 million network packets using optimized preprocessing and feature engineering techniques. Trained an ensemble of SVM and Random Forest models achieving 94.1% detection accuracy with only 0.1s inference latency per sample. Implemented a federated learning pipeline to improve cross-site threat detection while maintaining data privacy.',
    image: '/projects/cyberthreat.svg',
    tags: ['Python', 'Django', 'SVM', 'Random Forest', 'Machine Learning', 'Federated Learning'],
    date: 'May 2025 - July 2025',
    highlights: [
      '94.1% threat detection accuracy',
      'Reduced false positives by 34%',
      'Processed 2.1M network packets',
      '0.1s inference latency',
      'Federated learning for privacy',
    ],
    githubUrl: 'https://github.com/d3v07',
    liveUrl: '#',
  },
  {
    title: 'ChatterBox',
    description: 'Terminal-based multi-user chat system built with C++ using System V IPC, RAII wrappers, and thread synchronization. Supports 50+ concurrent users with 0.4s average latency.',
    longDescription: 'Designed and implemented a robust terminal-based chat application in C++ demonstrating advanced systems programming concepts. Used System V IPC for inter-process communication, implemented RAII wrappers for safe resource management, and employed mutex-protected server-client concurrency to handle multiple simultaneous connections. Built a custom lightweight binary protocol with timestamps ensuring ordered message delivery.',
    image: '/projects/chatterbox.svg',
    tags: ['C++', 'System V IPC', 'Threading', 'RAII', 'Concurrency', 'Binary Protocol'],
    date: 'February 2025 - May 2025',
    highlights: [
      'Supports 50+ concurrent users',
      '0.4s average response latency',
      'Reduced dropped messages by 93%',
      'Custom binary protocol',
      'Thread-safe architecture',
    ],
    githubUrl: 'https://github.com/d3v07',
    liveUrl: '#',
  },
]

export const metadata = {
  title: 'Projects | Dev Trivedi',
  description: 'Portfolio of software development projects including web applications, machine learning systems, and systems programming.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-blue-950/20 dark:via-violet-950/20 dark:to-pink-950/20" />

        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A collection of software projects showcasing full-stack development, machine learning,
              and systems programming expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card shadow-lg transition-all group-hover:shadow-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                      {project.title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Key Highlights
                      </h3>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <Button asChild variant="default">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      {project.liveUrl !== '#' && (
                        <Button asChild variant="outline">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="mt-20 border-t border-border/40" />
                )}
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
                Interested in Working Together?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new projects and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://github.com/d3v07" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
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

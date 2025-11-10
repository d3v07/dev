'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )

    window.location.href = `mailto:trivedidev16@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-blue-950/20 dark:via-violet-950/20 dark:to-pink-950/20" />

        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question or want to work together? I'd love to hear from you.
              Drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:trivedidev16@gmail.com"
                        className="text-muted-foreground hover:text-blue-600 transition-colors"
                      >
                        trivedidev16@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-violet-50 dark:bg-violet-950/50">
                      <MapPin className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-muted-foreground">New Jersey, USA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-950/50">
                      <Linkedin className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/trivedi-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-blue-600 transition-colors"
                      >
                        linkedin.com/in/trivedi-dev
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/50">
                      <Github className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">GitHub</p>
                      <a
                        href="https://github.com/d3v07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-blue-600 transition-colors"
                      >
                        github.com/d3v07
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-semibold">Available for Opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm currently looking for full-time opportunities and interesting projects.
                  Feel free to reach out!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-lg border border-border bg-card p-8">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * This form will open your default email client with the message pre-filled.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Prefer Other Ways to Connect?</h2>
              <p className="text-lg text-muted-foreground">
                Feel free to reach out through any of these platforms
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <a
                href="mailto:trivedidev16@gmail.com"
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">Direct message</p>
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/trivedi-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-violet-50 dark:bg-violet-950/50 group-hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Professional network</p>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/d3v07"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-950/50 group-hover:scale-110 transition-transform">
                    <Github className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">View my code</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

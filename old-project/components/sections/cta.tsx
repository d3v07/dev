import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Calendar } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-blue-950/30 dark:via-violet-950/30 dark:to-pink-950/30 p-8 md:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400 to-violet-600 opacity-20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-gradient-to-br from-violet-400 to-pink-600 opacity-20 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <a href="mailto:trivedidev16@gmail.com">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Call
                </a>
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for opportunities
              </div>
              <div className="hidden sm:block text-muted-foreground/50">•</div>
              <div>Typically responds within 24 hours</div>
              <div className="hidden sm:block text-muted-foreground/50">•</div>
              <div>Based in New Jersey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Dev Trivedi - Full Stack Developer',
  description: 'Portfolio website showcasing full-stack development projects and expertise',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Dev Trivedi' }],
  creator: 'Dev Trivedi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devtrivedi.com',
    title: 'Dev Trivedi - Full Stack Developer',
    description: 'Portfolio website showcasing full-stack development projects and expertise',
    siteName: 'Dev Trivedi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Trivedi - Full Stack Developer',
    description: 'Portfolio website showcasing full-stack development projects and expertise',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;500&family=Atkinson+Hyperlegible+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
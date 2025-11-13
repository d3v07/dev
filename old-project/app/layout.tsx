import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
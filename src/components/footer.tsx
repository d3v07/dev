import Link from 'next/link'
import { contact } from '@/lib/resume'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: contact.github, label: 'GitHub' },
    { href: contact.linkedin, label: 'LinkedIn' },
    { href: `mailto:${contact.email}`, label: 'Email' },
  ]

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__mast">Dev Trivedi</p>

        <div className="grid-12 footer__cols">
          <p className="footer__about">
            Software development engineer and MS student in computer science at NJIT, building with MERN, AWS and C++.
          </p>

          <ul className="footer__list" aria-label="Pages">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <ul className="footer__list" aria-label="Elsewhere">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="footer__legal">&copy; {currentYear} Dev Trivedi</p>
      </div>
    </footer>
  )
}

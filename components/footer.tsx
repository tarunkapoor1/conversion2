import Link from 'next/link'

const footerLinks = [
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Conversion
            </Link>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Conversion. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-obsidian border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="font-display text-3xl font-medium text-cream mb-4">
              Stephen<span className="text-amber-glow">.</span>
            </div>

            <p className="font-body text-sm text-gray-500 leading-relaxed max-w-sm">
              Software Engineer building scalable applications, backend systems,
              and intelligent solutions that solve real-world problems.
            </p>

            <p className="font-mono text-xs text-amber-400 uppercase tracking-widest mt-6">
              Available for opportunities & collaborations
            </p>
          </div>


          {/* Navigation */}
          <div>
            <p className="section-label mb-5">
              Navigation
            </p>

            <nav className="grid grid-cols-2 gap-4">
              {footerLinks.map((link)=>(
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({isActive}) =>
                    `
                    font-body text-sm transition-colors
                    ${
                      isActive
                      ? 'text-amber-glow'
                      : 'text-gray-500 hover:text-amber-glow'
                    }
                    `
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>


          {/* Contact */}
          <div>
            <p className="section-label mb-5">
              Connect
            </p>

            <p className="font-body text-sm text-gray-500 leading-relaxed mb-6">
              Have a project idea or need help building a software solution?
              Let's create something impactful.
            </p>


            <a
              href="/contact"
              className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-amber-400
              hover:text-amber-300
              transition-colors
              "
            >
              Start a conversation
              <ArrowUpRight size={15}/>
            </a>


            <div className="flex gap-3 mt-8">
              {[
                {
                  icon:<Github size={16}/>,
                  href:'https://github.com/stephenombuya',
                  label:'GitHub'
                },
                {
                  icon:<Linkedin size={16}/>,
                  href:'https://www.linkedin.com/in/stephen-ombuya/',
                  label:'LinkedIn'
                },
                {
                  icon:<Mail size={16}/>,
                  href:'mailto:michiekaombuya@gmail.com',
                  label:'Email'
                }
              ].map((s)=>(
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="
                  w-10 h-10
                  border border-border
                  flex items-center justify-center
                  text-gray-500
                  hover:text-amber-400
                  hover:border-amber-400/40
                  transition-all
                  "
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>

        </div>


        {/* Bottom */}
        <div
          className="
          mt-16
          pt-8
          border-t border-border/50
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-3
          "
        >

          <p className="font-body text-xs text-gray-600">
            © {year} Stephen Ombuya. Built with passion, clean code, and curiosity.
          </p>


          <p className="font-mono text-xs text-gray-600 uppercase tracking-widest">
            Java · Spring Boot · React · AI
          </p>

        </div>

      </div>
    </footer>
  )
}
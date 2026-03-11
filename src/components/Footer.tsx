import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-obsidian border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display text-2xl font-medium text-cream">
            S<span className="text-amber-glow">.</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-8">
            {['home', 'about', 'projects', 'services', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                className="font-body text-xs tracking-widest uppercase text-gray-500 hover:text-amber-glow transition-colors"
              >
                {id}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={16} />, href: 'https://github.com/stephenombuya', label: 'GitHub' },
              { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/stephen-ombuya/', label: 'LinkedIn' },
              { icon: <Mail size={16} />, href: 'mailto:michiekaombuya@gmail.com', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 border border-border flex items-center justify-center text-gray-500 hover:text-amber-400 hover:border-amber-400/40 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-gray-600">
            © {year} Stephen Ombuya. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    // Staggered reveal on mount
    const children = el.querySelectorAll('[data-reveal]')
    children.forEach((child, i) => {
      setTimeout(() => {
        child.classList.add('visible')
      }, 200 + i * 120)
    })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-grid bg-noise overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-600/5 blur-[100px] pointer-events-none" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <p
              data-reveal
              className="animate-in section-label mb-8"
            >
              Software Engineer · Nairobi, Kenya
            </p>

            <h1
              data-reveal
              className="animate-in font-display text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.9] text-cream mb-2"
            >
              Stephen
            </h1>
            <h1
              data-reveal
              className="animate-in font-display text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.9] mb-10"
            >
              <span className="text-gradient italic">Ombuya</span>
            </h1>

            <p
              data-reveal
              className="animate-in font-body text-gray-400 text-lg leading-relaxed max-w-xl mb-10"
            >
              Backend-focused engineer building production-grade systems with{' '}
              <span className="text-cream">Java</span>,{' '}
              <span className="text-cream">Spring Boot</span>, and{' '}
              <span className="text-cream">Python</span>. I architect scalable APIs, secure
              authentication flows, and data-driven platforms that power real products.
            </p>

            <div data-reveal className="animate-in flex flex-wrap gap-4 mb-16">
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-primary rounded-full"
              >
                View My Work
                <ArrowDown size={16} />
              </button>
              <a
                href="https://docs.google.com/document/d/1lrcTmxPZXOIbGlYXSokRTRpZ3u5eiQ_HYfUVJs1TUcI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline rounded-full"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div data-reveal className="animate-in flex items-center gap-6">
              <span className="text-xs tracking-widest uppercase text-gray-600 font-body">
                Connect
              </span>
              <div className="w-12 h-px bg-border" />
              {[
                {
                  icon: <Github size={18} />,
                  href: 'https://github.com/stephenombuya',
                  label: 'GitHub',
                },
                {
                  icon: <Linkedin size={18} />,
                  href: 'https://www.linkedin.com/in/stephen-ombuya/',
                  label: 'LinkedIn',
                },
                {
                  icon: <Mail size={18} />,
                  href: 'mailto:michiekaombuya@gmail.com',
                  label: 'Email',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-gray-500 hover:text-amber-400 transition-colors duration-300 p-2"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Stats / Right Panel */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              { num: '3+', label: 'Years of Experience', sub: 'Full-stack & backend' },
              { num: '15+', label: 'Projects Delivered', sub: 'Freelance & personal' },
              { num: '5+', label: 'Tech Certifications', sub: 'HackerRank, FCC & more' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                data-reveal
                className={`animate-in stagger-${i + 1} card-base card-hover group`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-display text-5xl font-light text-gradient mb-1">
                      {stat.num}
                    </p>
                    <p className="font-body text-cream font-medium">{stat.label}</p>
                    <p className="font-body text-gray-500 text-sm mt-1">{stat.sub}</p>
                  </div>
                  <div className="w-px h-16 bg-amber-400/20 group-hover:bg-amber-400/60 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={16} className="text-amber-400/50" />
      </div>
    </section>
  )
}

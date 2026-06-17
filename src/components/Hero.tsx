import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, Code2, Database, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'
import { posts } from '../data/posts'

const specialties = [
  'Java & Spring Boot',
  'REST APIs',
  'Database Design',
  'System Architecture',
  'Automation & CI/CD',
  'Product Thinking',
]

const processSteps = [
  {
    title: 'Discover',
    text: 'I clarify goals, constraints, and success metrics before shaping the solution.',
  },
  {
    title: 'Build',
    text: 'I turn ideas into clean, scalable systems with strong architecture and testing.',
  },
  {
    title: 'Deliver',
    text: 'I focus on launch readiness, reliability, and a smooth handoff for teams.',
  },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const homeRef = useScrollAnimation()
  const featuredRef = useScrollAnimation()
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
  const latestPosts = posts.slice(0, 3)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const children = el.querySelectorAll('[data-reveal]')
    children.forEach((child, i) => {
      setTimeout(() => {
        child.classList.add('visible')
      }, 200 + i * 120)
    })
  }, [])

  return (
    <>
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
              <p data-reveal className="animate-in section-label mb-8">
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
                <Link to="/projects" className="btn-primary rounded-full">
                  View My Work
                  <ArrowDown size={16} />
                </Link>
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

      <section className="py-16 md:py-20 bg-surface relative overflow-hidden" ref={homeRef}>
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-in">
              <p className="section-label">What I Bring</p>
              <h2 className="section-title text-4xl md:text-5xl">
                Building <em className="text-amber-400">systems</em> that scale.
              </h2>
              <p className="font-body text-gray-400 mt-6 leading-relaxed">
                I focus on solving real business problems with thoughtful architecture, clean implementation,
                and a strong eye for long-term maintainability.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {specialties.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-2 border border-border text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Sparkles size={18} />,
                  title: 'Product thinking',
                  text: 'Turning requirements into practical, user-centered software decisions.',
                },
                {
                  icon: <Code2 size={18} />,
                  title: 'Modern development',
                  text: 'Writing maintainable code with clean APIs and scalable frontend patterns.',
                },
                {
                  icon: <Database size={18} />,
                  title: 'Data & reliability',
                  text: 'Designing secure systems that are resilient, observable, and efficient.',
                },
                {
                  icon: <ArrowRight size={18} />,
                  title: 'Continuous delivery',
                  text: 'Improving workflows so teams can iterate faster with confidence.',
                },
              ].map((item, index) => (
                <div key={item.title} className={`animate-in stagger-${index + 1} card-base card-hover`}>
                  <div className="w-12 h-12 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-body text-cream font-medium mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-obsidian border-y border-border" ref={featuredRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="animate-in mb-10">
            <p className="section-label">How I Work</p>
            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className={`animate-in stagger-${index + 1} card-base`}>
                  <p className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-3">
                    0{index + 1}
                  </p>
                  <h3 className="font-display text-2xl text-cream mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-gray-400 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-in mb-12 pt-6">
            <p className="section-label">Latest Posts</p>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="section-title text-4xl md:text-5xl">From the <em className="text-amber-400">blog</em></h2>
              <Link to="/blog" className="btn-outline rounded-full">
                View all posts
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {latestPosts.map((post, index) => (
              <div key={post.slug} className={`animate-in stagger-${index + 1} group card-base card-hover`}>
                <div className="overflow-hidden mb-5 aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 font-mono mb-3">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display text-2xl text-cream mb-3">{post.title}</h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 hover:text-amber-soft transition-colors"
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="animate-in mb-12 pt-6">
            <p className="section-label">Featured Projects</p>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="section-title text-4xl md:text-5xl">Selected <em className="text-amber-400">work</em></h2>
              <Link to="/projects" className="btn-outline rounded-full">
                Explore all projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={project.slug} className={`animate-in stagger-${index + 1} group card-base card-hover`}>
                <div className="overflow-hidden mb-5 aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <p className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-3">
                  {project.tag}
                </p>
                <h3 className="font-display text-2xl text-cream mb-3">{project.title}</h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 hover:text-amber-soft transition-colors"
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

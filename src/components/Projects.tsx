import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data/projects'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const delay = `stagger-${Math.min((index % 3) + 1, 5)}`

  if (project.featured) {
    return (
      <div className={`animate-in ${delay} group relative overflow-hidden border border-border hover:border-amber-400/40 transition-all duration-500 bg-card`}>
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none z-0" />
        </div>
        <div className="p-6 flex flex-col justify-end">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-3">
            {project.tag}
          </span>
          <h3 className="font-display text-3xl font-light text-cream mb-3">{project.title}</h3>
          <p className="font-body text-sm text-gray-400 leading-relaxed mb-5 max-w-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((t) => (
              <span key={t} className="font-mono text-xs px-2 py-1 bg-obsidian/80 border border-border text-gray-400">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-gray-400 hover:text-amber-400 transition-colors uppercase tracking-widest font-body"
            >
              <Github size={14} /> Code
            </a>
            <Link
              to={`/projects/${project.slug}`}
              className="flex items-center gap-2 text-xs text-amber-400 hover:text-amber-soft transition-colors uppercase tracking-widest font-body"
            >
              <ArrowUpRight size={14} /> View Details
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`animate-in ${delay} group card-base card-hover`}>
      <div className="overflow-hidden mb-5 aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      <span className="font-mono text-xs text-amber-400/70 uppercase tracking-widest mb-3 block">
        {project.tag}
      </span>
      <h3 className="font-display text-2xl font-light text-cream mb-3">{project.title}</h3>
      <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((t) => (
          <span key={t} className="font-mono text-xs px-2 py-1 border border-border text-gray-500">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 pt-4 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-amber-400 transition-colors uppercase tracking-widest font-body"
        >
          <Github size={13} /> Code
        </a>
        <Link
          to={`/projects/${project.slug}`}
          className="flex items-center gap-2 text-xs text-amber-400/70 hover:text-amber-400 transition-colors uppercase tracking-widest font-body"
        >
          <ExternalLink size={13} /> Details
        </Link>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useScrollAnimation()

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-32 bg-surface relative" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="mb-20">
          <p className="animate-in section-label">Portfolio</p>
          <h2 className="animate-in section-title">
            My <em className="text-amber-400">Projects</em>
          </h2>
          <span className="animate-in gold-line" />
          <p className="animate-in font-body text-gray-400 mt-8 max-w-2xl leading-relaxed">
            Real-world software solutions built to solve complex problems — from scalable backend
            architectures to full-stack applications. Each project reflects a commitment to clean
            code and performance.
          </p>
        </div>

        {/* Featured (3 col) */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Rest (4 col) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="animate-in mt-16 text-center">
          <a
            href="https://github.com/stephenombuya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline rounded-full"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

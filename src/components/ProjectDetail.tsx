import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug || '')

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="text-center">
          <p className="section-label">Project Not Found</p>
          <Link to="/projects" className="btn-primary rounded-full mt-6 inline-flex">
            Back to Projects
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-32 bg-surface min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-label">{project.tag}</p>
            <h1 className="font-display text-5xl md:text-6xl text-cream mb-6">{project.title}</h1>
            <p className="font-body text-gray-300 leading-relaxed mb-8">{project.overview}</p>
            <div className="flex gap-4 mb-10">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline rounded-full">
                <Github size={16} /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary rounded-full">
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>

          <div className="border border-border overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="card-base">
            <p className="section-label mb-4">Challenge</p>
            <p className="font-body text-gray-300 leading-relaxed">{project.challenge}</p>
          </div>
          <div className="card-base">
            <p className="section-label mb-4">Outcome</p>
            <p className="font-body text-gray-300 leading-relaxed">{project.outcome}</p>
          </div>
        </div>

        <div className="mt-16">
          <p className="section-label mb-6">Highlights</p>
          <div className="flex flex-wrap gap-3">
            {project.highlights.map((item) => (
              <span key={item} className="font-mono text-xs px-3 py-2 border border-border text-gray-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="section-label mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span key={item} className="font-mono text-xs px-3 py-2 bg-obsidian border border-border text-amber-400">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

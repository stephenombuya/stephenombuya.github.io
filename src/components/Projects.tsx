import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import EAMI from '../assets/images/eami.avif';
import FlightBooking from '../assets/images/flight-booking.avif';
import HospitalManagement from '../assets/images/hospital-management.avif';
import LBMTool from '../assets/images/lbm-tool.jpeg';
import NexusAdmin from '../assets/images/nexus-admin.avif';
import RealEstate from '../assets/images/real-estate.avif';
import SSM from '../assets/images/ssm.avif';




interface Project {
  title: string
  description: string
  stack: string[]
  github: string
  demo: string
  image: string
  featured?: boolean
  tag: string
}

const projects: Project[] = [
  {
    title: 'Subscription Service Management',
    description:
      'Production-grade backend for managing subscription-based SaaS services. Features recurring billing via Stripe, user account management, usage analytics, webhook handling, and per-IP rate limiting with Bucket4j.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'Stripe SDK', 'Bucket4j'],
    github: 'https://github.com/stephenombuya/Subscription-Service-Management',
    demo: 'https://ssm-demo.com',
    image: SSM,
    featured: true,
    tag: 'Backend · SaaS',
  },
  {
    title: 'Flight Booking System',
    description:
      'Production-ready backend for flight reservations. Includes stateless JWT auth, role-based access control, atomic seat reservation, a payment gateway stub, async email notifications, and a full test suite of 40+ cases.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'JWT', 'Swagger'],
    github: 'https://github.com/stephenombuya/Flight-Booking-System',
    demo: 'https://flight-booking-demo.com',
    image: FlightBooking,
    featured: true,
    tag: 'Backend · Java',
  },
  {
    title: 'NexusAdmin Dashboard',
    description:
      'Enterprise-grade SaaS admin dashboard with real-time metrics, role-based access control, interactive charts, and full user management with sorting, filtering, and pagination.',
    stack: ['React', 'TypeScript', 'Redux', 'Recharts', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/stephenombuya/nexus-admin-dashboard',
    demo: 'https://nexus-admin-dashboard-beta.vercel.app',
    image: NexusAdmin,
    featured: true,
    tag: 'Frontend · Dashboard',
  },
  {
    title: 'Real Estate Management System',
    description:
      'Back-end web application for managing real estate listings and transactions. Built with Spring and MySQL for scalable property data management.',
    stack: ['Java', 'Spring', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/stephenombuya/RealEstate-Backend-Web-Application',
    demo: 'https://real-estate-demo.com',
    image: RealEstate,
    tag: 'Backend · Real Estate',
  },
  {
    title: 'East Africa Mineral Insights',
    description:
      'Full-stack, multi-page website showcasing Kenya and East Africa\'s mineral resources. Built with React, TypeScript, and Supabase.',
    stack: ['TypeScript', 'React', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/stephenombuya/EAMI-Website',
    demo: 'https://eami.netlify.app/',
    image: EAMI,
    tag: 'Full-Stack',
  },
  {
    title: 'Hospital Management System',
    description:
      'Full-stack web application for hospital management, handling patient records and appointments with a clean, accessible interface.',
    stack: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    github: 'https://github.com/stephenombuya/Hospital_Management_System',
    demo: 'https://hospital-demo.com',
    image: HospitalManagement,
    tag: 'Full-Stack · Health',
  },
  {
    title: 'Laptop Battery Management Tool',
    description:
      'Cross-platform battery management solution that monitors battery levels and prevents overcharging through intelligent charging control and OS notifications.',
    stack: ['Python', 'C++', 'JavaScript', 'Rust', 'C', 'Electron'],
    github: 'https://github.com/stephenombuya/Laptop-Battery-Management-Tool',
    demo: 'https://lbm-demo.com',
    image: LBMTool,
    tag: 'Systems · Desktop',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const delay = `stagger-${Math.min((index % 3) + 1, 5)}`

  if (project.featured) {
    return (
      <div className={`animate-in ${delay} group relative overflow-hidden border border-border hover:border-amber-400/40 transition-all duration-500 bg-card`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
        </div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
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
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-amber-400 hover:text-amber-soft transition-colors uppercase tracking-widest font-body"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight size={20} className="text-amber-400" />
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
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-amber-400/70 hover:text-amber-400 transition-colors uppercase tracking-widest font-body"
        >
          <ExternalLink size={13} /> Demo
        </a>
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

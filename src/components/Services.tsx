import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Link } from 'react-router-dom'
import { Code2, Database, TrendingUp, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: <Code2 size={24} />,
    title: 'Web & Application Development',
    tagline: 'Modern applications built for growth',
    items: [
      {
        name: 'Frontend Development',
        desc: 'Responsive React, Tailwind CSS and TypeScript applications with exceptional user experiences and AI-powered interfaces.',
      },
      {
        name: 'Backend Development',
        desc: 'REST APIs, authentication systems, business logic, AI integrations and scalable server-side architecture.',
      },
      {
        name: 'Full-Stack Development',
        desc: 'End-to-end product development from database design to deployment, including intelligent automation and AI-driven features.',
      },
      {
        name: 'Custom Software Development',
        desc: 'Business systems tailored to automate workflows, improve efficiency and integrate modern AI capabilities.',
      },
      {
        name: 'Desktop Application Development',
        desc: 'Java desktop applications, POS systems and offline-first business solutions enhanced with automation and intelligent features.',
      },
      {
        name: 'AI-Powered Application Development',
        desc: 'Building intelligent applications with AI assistants, chatbots, document processing and automated workflows.',
      },
      {
        name: 'API & AI Integration',
        desc: 'Connecting applications with AI models, third-party APIs and intelligent services to extend functionality.',
      },
    ],
  },

  {
    icon: <Database size={24} />,
    title: 'Data & Systems Engineering',
    tagline: 'Reliable systems powered by quality data',
    items: [
      {
        name: 'Database Design',
        desc: 'Schema design, normalization, optimization, data modeling and performance tuning for reliable systems.',
      },
      {
        name: 'Data Analysis & Insights',
        desc: 'Transforming raw data into actionable business insights, dashboards and AI-assisted reports.',
      },
      {
        name: 'AI & Machine Learning Solutions',
        desc: 'Building intelligent systems using predictive analytics, automation and machine learning capabilities.',
      },
      {
        name: 'Requirements Engineering',
        desc: 'Gathering, documenting and validating business and technical requirements to build effective solutions.',
      },
      {
        name: 'System Architecture',
        desc: 'Designing scalable, maintainable and secure software architectures ready for modern cloud and AI workloads.',
      },
      {
        name: 'System Integration',
        desc: 'Connecting third-party APIs, payment gateways, AI services and external business platforms.',
      },
      {
        name: 'Data Automation',
        desc: 'Automating data workflows, reporting processes and repetitive business operations.',
      },
    ],
  },

  {
    icon: <TrendingUp size={24} />,
    title: 'Digital Growth Solutions',
    tagline: 'Helping businesses build visibility online',
    items: [
      {
        name: 'Software Consulting',
        desc: 'Technical guidance for startups and growing businesses on architecture, technology choices and digital transformation.',
      },
      {
        name: 'AI Strategy & Integration Consulting',
        desc: 'Helping businesses identify AI opportunities and integrate intelligent solutions into existing workflows.',
      },
      {
        name: 'Code Reviews',
        desc: 'Improving code quality, security, maintainability and performance through detailed technical reviews.',
      },
      {
        name: 'Project Planning',
        desc: 'Creating development roadmaps, feature priorities and technical strategies aligned with business goals.',
      },
      {
        name: 'AI & Workflow Automation',
        desc: 'Identifying repetitive processes and implementing automation solutions to improve efficiency.',
      },
      {
        name: 'Maintenance & Support',
        desc: 'Ongoing monitoring, updates, performance improvements and issue resolution for software systems.',
      },
      {
        name: 'Technical Documentation',
        desc: 'Creating clear documentation for systems, APIs, architecture and development teams.',
      },
      {
        name: 'Technology Audits',
        desc: 'Evaluating existing systems to identify performance issues, security risks and improvement opportunities.',
      },
    ],
  },

  {
    icon: <Code2 size={24} />,
    title: 'Consulting & Technical Support',
    tagline: 'Guidance beyond development',
    items: [
      {
        name: 'Software Consulting',
        desc: 'Technical guidance for startups and growing businesses.',
      },
      {
        name: 'Code Reviews',
        desc: 'Improving code quality, maintainability and performance.',
      },
      {
        name: 'Project Planning',
        desc: 'Roadmaps, feature prioritization and technical strategy.',
      },
      {
        name: 'Maintenance & Support',
        desc: 'Ongoing monitoring, updates and issue resolution.',
      },
      {
        name: 'Technical Documentation',
        desc: 'Clear documentation for systems, APIs and development teams.',
      },
    ],
  },

  {
    icon: <Code2 size={24} />,
    title: 'AI & Intelligent Solutions',
    tagline: 'Practical AI for modern businesses',
    items: [
      {
        name: 'AI Chatbots',
        desc: 'Custom chatbots for customer support, lead generation and internal knowledge systems.',
      },
      {
        name: 'AI Integration',
        desc: 'Integrating OpenAI, Claude, Gemini and other AI services into existing applications.',
      },
      {
        name: 'Document Processing',
        desc: 'Extracting, classifying and analyzing information from PDFs, forms and business documents.',
      },
      {
        name: 'AI-Powered Automation',
        desc: 'Automating repetitive business tasks using intelligent workflows and agents.',
      },
      {
        name: 'Knowledge Base Systems',
        desc: 'Retrieval-Augmented Generation (RAG) systems that answer questions from company data.',
      },
      {
        name: 'AI Content Solutions',
        desc: 'Tools for content generation, summarization, translation and text analysis.',
      },
    ],
  }
]

const testimonials = [
  { quote: 'Outstanding work! The project was delivered on time and exceeded expectations.', author: 'Client A' },
  { quote: 'Professional and efficient. The backend architecture was exactly what we needed.', author: 'Client B' },
  { quote: "The best developer I've worked with. Attention to detail was impressive.", author: 'Client C' },
  { quote: 'Exceptional skills and great communication. Will hire again without question!', author: 'Client D' },
]

const faqs = [
  {
    q: 'What industries do you work with?',
    a: 'I have experience with tech startups, e-commerce businesses, healthcare providers, real estate firms, and educational institutions.',
  },
  {
    q: 'How do you price your services?',
    a: 'Pricing varies based on project complexity and timeline. Check my rate card for base rates, or contact me for a custom quote.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects take between 2–6 weeks depending on scope. I provide a detailed timeline after the initial consultation.',
  },
  {
    q: 'Do you offer post-project support?',
    a: 'Yes! I offer maintenance and support plans to ensure your product runs smoothly after delivery.',
  },
]

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-border hover:border-amber-400/30 transition-colors duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-body text-cream font-medium pr-8">{q}</span>
        {open ? (
          <ChevronUp size={16} className="text-amber-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-gray-500 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="font-body text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Services() {
  const ref = useScrollAnimation()

  return (
    <section id="services" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="animate-in section-label">What I Offer</p>
          <h2 className="animate-in section-title">
            My <em className="text-amber-400">Services</em>
          </h2>
          <span className="animate-in gold-line" />
          <p className="animate-in font-body text-gray-400 mt-8 max-w-2xl leading-relaxed">
            I help businesses design and build scalable digital solutions — from robust backend
            systems to data-driven insights and digital growth strategies.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`animate-in stagger-${i + 1} card-base card-hover group`}
            >
              <div className="w-12 h-12 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400/10 transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="font-display text-2xl font-light text-cream mb-1">{s.title}</h3>
              <p className="font-body text-xs text-amber-400/70 uppercase tracking-widest mb-6">
                {s.tagline}
              </p>
              <ul className="space-y-4">
                {s.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-body text-cream text-sm font-medium mb-0.5">{item.name}</p>
                    <p className="font-body text-gray-500 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Rate Card CTA */}
        <div className="animate-in flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 border border-amber-400/20 bg-amber-400/5 mb-24">
          <div className="flex-1">
            <p className="font-display text-2xl font-light text-cream mb-1">Ready to work together?</p>
            <p className="font-body text-gray-400 text-sm">View my rate card or reach out to discuss your project.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://docs.google.com/document/d/1xEf5kyWgjhQVzOsVCD0TS0Sl5x1AZeOIbROr-5x8hnA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline rounded text-xs py-3 px-5"
            >
              <ExternalLink size={14} />
              Rate Card
            </a>
            <Link to="/contact" className="btn-primary text-xs rounded-full py-3 px-5">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <p className="animate-in section-label mb-12">Client Feedback</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`animate-in stagger-${i + 1} card-base border-l-2 border-l-amber-400/50`}
              >
                <p className="font-display text-3xl text-amber-400/30 leading-none mb-3">"</p>
                <p className="font-body text-gray-300 text-sm leading-relaxed mb-4">{t.quote}</p>
                <p className="font-mono text-xs text-amber-400/60 uppercase tracking-widest">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <p className="animate-in section-label mb-8">Frequently Asked</p>
          <div className="space-y-2 max-w-3xl">
            {faqs.map((f, i) => (
              <div key={i} className="animate-in">
                <FAQ q={f.q} a={f.a} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

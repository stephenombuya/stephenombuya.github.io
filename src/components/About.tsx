import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Download, MapPin, Mail, Heart } from 'lucide-react'
import ProfileImg from '../assets/images/profile-pic.png';

const languages = [
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'SQL',
  'C',
]

const technologies = [
  'Spring Boot',
  'React',
  'Flask',
  'Tailwind CSS',
  'PostgreSQL',
  'MySQL',
  'Docker',
  'Git',
  'Linux',
]

const expertise = [
  'REST APIs',
  'System Design',
  'Software Architecture',
  'Database Design',
  'Cloud Fundamentals',
  'CI/CD',
  'AI Integration',
  'Automation',
  'Data Structures',
  'Algorithms',
]
const education = [
  {
    period: '2022 – 2026',
    institution: 'The Cooperative University of Kenya',
    degree: 'BSc Software Engineering',
  },
  {
    period: '2023 – Present',
    institution: 'FreeCodeCamp',
    degree: 'Backend Development · Frontend Libraries · JavaScript Algorithms · Responsive Web Design',
  },
  {
    period: '2021 – Present',
    institution: 'HackerRank',
    degree: 'Certifications in Java, SQL, Python and Algorithmic Problem Solving',
  },
]

const experience = [
  {
    period: '2025 – Present',
    role: 'AI & Software Solutions Developer',
    company: 'Independent Projects',
    desc: 'Built AI-enhanced applications integrating intelligent automation, data processing and modern AI tools into software systems.',
  },
  {
    period: '2024 – Present',
    role: 'Freelance Software Engineer',
    company: 'Independent',
    desc: 'Designed and developed scalable backend systems, REST APIs, database architectures and business automation solutions for real estate, hospitality and healthcare platforms.',
  },
  {
    period: '2024 – 2025',
    role: 'Tech Tutor',
    company: 'Private Instruction',
    desc: 'Taught programming fundamentals to private school students. Designed engaging, hands-on coding curricula.',
  },
]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="animate-in section-label">Who I Am</p>
          <h2 className="animate-in section-title">
            About <em className="text-amber-400">Me</em>
          </h2>
          <span className="animate-in gold-line" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Bio */}
          <div className="lg:col-span-5 space-y-8">
            <div className="animate-in relative w-full aspect-square max-w-sm">
              <div className="absolute inset-0 border border-amber-400/20" />
              
              <div className="absolute inset-4 bg-card border border-border flex items-center justify-center overflow-hidden">
                {/* Profile Image */}
                <img 
                  src={ProfileImg} 
                  alt="Stephen Ombuya" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
            </div>


            {/* Quick facts */}
            <div className="animate-in card-base space-y-4">
              {[
                { icon: <MapPin size={14} />, label: 'Nairobi, Kenya' },
                { icon: <Mail size={14} />, label: 'michiekaombuya@gmail.com' },
                { icon: <Heart size={14} />, label: 'Software · Problem Solving · Chess' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <span className="text-amber-400">{f.icon}</span>
                  <span className="font-body text-sm text-gray-400">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="animate-in">
              <a
                href="https://docs.google.com/document/d/1lrcTmxPZXOIbGlYXSokRTRpZ3u5eiQ_HYfUVJs1TUcI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full rounded-full justify-center"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 space-y-12">
            {/* Bio text */}
            <div className="animate-in">
              <p className="font-body text-gray-300 text-lg leading-relaxed mb-4">
                I'm a <span className="text-cream font-medium">Software Engineer</span> passionate about
                designing and building reliable digital systems. I specialize in backend development,
                full-stack applications, database architecture, and creating scalable solutions that
                solve real-world business problems.
              </p>

              <p className="font-body text-gray-400 leading-relaxed">
                From RESTful APIs and custom software platforms to AI-powered solutions and automation
                systems, I enjoy transforming ideas into products that are secure, maintainable, and
                built for growth. I am continuously exploring better ways to engineer software and
                create meaningful impact through technology.
              </p>
              
            </div>

            {/* Skills */}
            <div className="animate-in">
              <p className="section-label text-xs mb-6">Skills & Technologies</p>
              <div className="space-y-6">
                {[
                  { title: 'Languages', tags: languages },
                  { title: 'Web Technologies', tags: technologies },
                  { title: 'CS Constructs', tags: expertise },
                ].map((group) => (
                  <div key={group.title}>
                    <p className="font-body text-xs text-gray-500 uppercase tracking-widest mb-3">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-3 py-1.5 border border-border text-gray-300 hover:border-amber-400/50 hover:text-amber-400 transition-colors duration-200 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid lg:grid-cols-2 gap-12 mt-24">
          {/* Education */}
          <div>
            <p className="animate-in section-label mb-8">Education</p>
            <div className="relative pl-6 space-y-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              {education.map((e, i) => (
                <div key={i} className="animate-in relative">
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-amber-400 bg-obsidian" />
                  <p className="font-mono text-xs text-amber-400 mb-1">{e.period}</p>
                  <p className="font-body text-cream font-medium mb-0.5">{e.institution}</p>
                  <p className="font-body text-sm text-gray-400 leading-relaxed">{e.degree}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <p className="animate-in section-label mb-8">Experience</p>
            <div className="relative pl-6 space-y-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              {experience.map((e, i) => (
                <div key={i} className="animate-in relative">
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-amber-400/50 bg-obsidian" />
                  <p className="font-mono text-xs text-amber-400/70 mb-1">{e.period}</p>
                  <p className="font-body text-cream font-medium">{e.role}</p>
                  <p className="font-body text-xs text-amber-400/60 mb-1.5 uppercase tracking-widest">
                    {e.company}
                  </p>
                  <p className="font-body text-sm text-gray-400 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

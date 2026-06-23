export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image: string
  content: string[]
}

export const posts: Post[] = [
  {
    slug: 'building-scalable-backend-systems',
    title: 'Building Scalable Backend Systems',
    excerpt:
      'A practical look at architecture choices that help teams ship reliable products without overcomplicating the stack.',
    date: 'June 12, 2026',
    category: 'Engineering',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    content: [
      'When building backend systems, scalability starts long before traffic grows. It begins with good boundaries, clear contracts, and thoughtful data models.',
      'For many products, the first real challenge is balancing speed with maintainability. A system that is easy to launch can quickly become difficult to extend if the core services are tightly coupled.',
      'In practice, I try to separate concerns early: authentication, business workflows, background jobs, and data access all deserve their own clear boundaries.',
      'A good architecture is not about using the most advanced stack. It is about choosing the right tools so teams can deliver safely and keep iterating with confidence.',
    ],
  },
  {
    slug: 'why-api-design-matters',
    title: 'Why API Design Matters More Than Most Teams Expect',
    excerpt:
      'Good APIs reduce confusion, speed up integrations, and make future changes far less painful for everyone involved.',
    date: 'May 28, 2026',
    category: 'Product',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    content: [
      'A strong API is more than a list of routes. It is a contract between teams, services, and clients.',
      'When the API design is clear, developers spend less time guessing and more time solving actual product problems.',
      'Versioning, consistent response shapes, and meaningful error messages go a long way toward creating trust between the backend and the people using it.',
      'The best API design decisions are usually the ones that keep future changes small, predictable, and safe.',
    ],
  },
  {
    slug: 'how-i-approach-building-products',
    title: 'How I Approach Building Products',
    excerpt:
      'A quick look at how I move from idea to implementation while keeping the user experience and technical reality aligned.',
    date: 'May 10, 2026',
    category: 'Process',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    content: [
      'I usually start with the problem, not the tool. That helps me understand what really needs to be solved before choosing the implementation details.',
      'From there, I look at the user flow, the data model, and the constraints that could affect reliability or speed.',
      'Once the foundation is clear, the next step is selecting a solution that is practical for the team and sustainable for the product.',
      'The goal is always to create something useful, understandable, and easy to improve over time.',
    ],
  },
  {
    slug: 'designing-pos-systems-for-real-businesses',
    title: 'Designing POS Systems for Real Businesses',
    excerpt:
      'Lessons learned from building point of sale software that must remain reliable even when internet connectivity is unavailable.',
    date: 'April 25, 2026',
    category: 'Architecture',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    content: [
      'A POS system is different from many web applications because sales cannot stop when connectivity fails.',
      'Offline-first design becomes critical when businesses depend on continuous transactions throughout the day.',
      'Reliable inventory management, local data persistence, and synchronization strategies all play an important role.',
      'The best POS solutions prioritize stability, simplicity, and operational efficiency over unnecessary complexity.',
    ],
  },
  {
    slug: 'clean-architecture-in-modern-applications',
    title: 'Applying Clean Architecture in Modern Applications',
    excerpt:
      'How separation of concerns helps teams build maintainable systems that can evolve without constant rewrites.',
    date: 'April 8, 2026',
    category: 'Engineering',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Clean architecture encourages developers to focus on business rules before implementation details.',
      'By isolating dependencies, systems become easier to test and adapt to changing requirements.',
      'The goal is not perfection but creating codebases that remain understandable as they grow.',
      'When applied thoughtfully, clean architecture reduces technical debt and improves team productivity.',
    ],
  },
  {
    slug: 'lessons-from-building-full-stack-projects',
    title: 'Lessons From Building Full-Stack Projects',
    excerpt:
      'Key insights gained from developing complete applications from database design to user interfaces.',
    date: 'March 22, 2026',
    category: 'Development',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Building across the entire stack provides a better understanding of how technical decisions affect users.',
      'Frontend performance, backend reliability, and database efficiency are deeply connected.',
      'Many project challenges are not technical but involve communication and prioritization.',
      'The most successful projects balance engineering quality with business goals.',
    ],
  },
  {
    slug: 'database-design-principles-every-developer-should-know',
    title: 'Database Design Principles Every Developer Should Know',
    excerpt:
      'Strong applications begin with thoughtful data modeling and a clear understanding of relationships.',
    date: 'March 5, 2026',
    category: 'Databases',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    content: [
      'A database should reflect business realities rather than application shortcuts.',
      'Good normalization reduces duplication while maintaining flexibility.',
      'Indexes can dramatically improve performance when used correctly.',
      'A well-designed schema makes future development faster and less error-prone.',
    ],
  },
  {
    slug: 'from-internship-to-software-engineer',
    title: 'From Internship to Software Engineer',
    excerpt:
      'Reflections on growth, continuous learning, and building confidence as a developer.',
    date: 'February 16, 2026',
    category: 'Career',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Every developer starts somewhere, and growth comes from consistent practice.',
      'Internships provide opportunities to learn how professional teams collaborate and deliver software.',
      'The transition from learning concepts to solving real-world problems is where confidence develops.',
      'Continuous learning remains one of the most important habits in a technology career.',
    ],
  },
  {
    slug: 'building-projects-that-stand-out',
    title: 'Building Projects That Stand Out',
    excerpt:
      'Why solving real problems matters more than simply adding more technologies to a portfolio.',
    date: 'January 30, 2026',
    category: 'Portfolio',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Recruiters and hiring managers often care more about problem-solving than technology lists.',
      'Projects that demonstrate business value tend to leave a stronger impression.',
      'Clear documentation and thoughtful design choices help showcase engineering skills.',
      'A portfolio should tell the story of how you think, not just what you have built.',
    ],
  },
]

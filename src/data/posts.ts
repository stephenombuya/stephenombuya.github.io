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
]

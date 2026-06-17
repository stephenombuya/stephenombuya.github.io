import EAMI from '../assets/images/eami.avif'
import FlightBooking from '../assets/images/flight-booking.avif'
import HospitalManagement from '../assets/images/hospital-management.avif'
import LBMTool from '../assets/images/lbm-tool.jpeg'
import NexusAdmin from '../assets/images/nexus-admin.avif'
import RealEstate from '../assets/images/real-estate.avif'
import SSM from '../assets/images/ssm.avif'

export interface Project {
  title: string
  slug: string
  description: string
  stack: string[]
  github: string
  demo: string
  image: string
  featured?: boolean
  tag: string
  overview: string
  challenge: string
  outcome: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: 'Subscription Service Management',
    slug: 'subscription-service-management',
    description:
      'Production-grade backend for managing subscription-based SaaS services. Features recurring billing via Stripe, user account management, usage analytics, webhook handling, and per-IP rate limiting with Bucket4j.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'Stripe SDK', 'Bucket4j'],
    github: 'https://github.com/stephenombuya/Subscription-Service-Management',
    demo: 'https://ssm-demo.com',
    image: SSM,
    featured: true,
    tag: 'Backend · SaaS',
    overview:
      'A scalable subscription platform built to support recurring billing, secure authentication, and analytics for SaaS teams.',
    challenge:
      'The main challenge was designing a reliable billing workflow that could handle subscription changes, retries, and abuse prevention without compromising performance.',
    outcome:
      'The system now supports secure plan management, webhook-driven automation, and strong protection against misuse at scale.',
    highlights: [
      'Stripe-based recurring billing flow',
      'JWT and role-based access control',
      'Rate limiting and request throttling',
      'Webhook handling for external integrations',
    ],
  },
  {
    title: 'Flight Booking System',
    slug: 'flight-booking-system',
    description:
      'Production-ready backend for flight reservations. Includes stateless JWT auth, role-based access control, atomic seat reservation, payment gateway stub, async email notifications, and a full test suite of 40+ cases.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'JWT', 'Swagger'],
    github: 'https://github.com/stephenombuya/Flight-Booking-System',
    demo: 'https://flight-booking-demo.com',
    image: FlightBooking,
    featured: true,
    tag: 'Backend · Java',
    overview:
      'A reservation engine designed for consistency, secure transactions, and clean API contracts.',
    challenge:
      'Ensuring seat reservation accuracy under concurrent user activity was the biggest technical challenge.',
    outcome:
      'The platform delivers reliable booking flows with strong validation, auditability, and test coverage.',
    highlights: [
      'Atomic reservation logic',
      'JWT authentication + RBAC',
      'Email notification pipeline',
      '40+ automated test cases',
    ],
  },
  {
    title: 'NexusAdmin Dashboard',
    slug: 'nexusadmin-dashboard',
    description:
      'Enterprise-grade SaaS admin dashboard with real-time metrics, role-based access control, interactive charts, and full user management with sorting, filtering, and pagination.',
    stack: ['React', 'TypeScript', 'Redux', 'Recharts', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/stephenombuya/nexus-admin-dashboard',
    demo: 'https://nexus-admin-dashboard-beta.vercel.app',
    image: NexusAdmin,
    featured: true,
    tag: 'Frontend · Dashboard',
    overview:
      'A polished analytics dashboard built to help teams monitor performance and manage operations efficiently.',
    challenge:
      'The dashboard needed to present complex data clearly while keeping the interface responsive and easy to navigate.',
    outcome:
      'The final product gives stakeholders a strong overview of KPIs with filtering, sorting, and reporting tools.',
    highlights: [
      'Interactive analytics charts',
      'Role-based admin controls',
      'Responsive data tables',
      'Fast setup with Vite + Tailwind',
    ],
  },
  {
    title: 'Real Estate Management System',
    slug: 'real-estate-management-system',
    description:
      'Back-end web application for managing real estate listings and transactions. Built with Spring and MySQL for scalable property data management.',
    stack: ['Java', 'Spring', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/stephenombuya/RealEstate-Backend-Web-Application',
    demo: 'https://real-estate-demo.com',
    image: RealEstate,
    tag: 'Backend · Real Estate',
    overview:
      'A backend platform for managing listings, transactions, and property records in a structured way.',
    challenge:
      'The system needed to support business workflows around property records while keeping data integrity intact.',
    outcome:
      'The result is a reliable backend foundation for real estate operations and future integrations.',
    highlights: [
      'Property and transaction management',
      'Structured database schema',
      'Scalable Spring-based architecture',
      'Easy integration for client applications',
    ],
  },
  {
    title: 'East Africa Mineral Insights',
    slug: 'east-africa-mineral-insights',
    description:
      'Full-stack, multi-page website showcasing Kenya and East Africa\'s mineral resources. Built with React, TypeScript, and Supabase.',
    stack: ['TypeScript', 'React', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/stephenombuya/EAMI-Website',
    demo: 'https://eami.netlify.app/',
    image: EAMI,
    tag: 'Full-Stack',
    overview:
      'A content-rich site designed to present regional mineral information through a clear, engaging interface.',
    challenge:
      'Balancing rich information architecture with a lightweight, fast-loading frontend was the primary challenge.',
    outcome:
      'The project now provides a strong public-facing experience for showcasing regional resources and insights.',
    highlights: [
      'Multi-page content structure',
      'Supabase-backed data flow',
      'Modern React + TypeScript setup',
      'Responsive design for broader reach',
    ],
  },
  {
    title: 'Hospital Management System',
    slug: 'hospital-management-system',
    description:
      'Full-stack web application for hospital management, handling patient records and appointments with a clean, accessible interface.',
    stack: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    github: 'https://github.com/stephenombuya/Hospital_Management_System',
    demo: 'https://hospital-demo.com',
    image: HospitalManagement,
    tag: 'Full-Stack · Health',
    overview:
      'A healthcare-facing application built to simplify patient and appointment workflows.',
    challenge:
      'The project needed to be both practical for end users and easy to maintain for future feature expansion.',
    outcome:
      'The system offers a clean, functional experience for managing core healthcare records and scheduling.',
    highlights: [
      'Patient records management',
      'Appointment workflow support',
      'Accessible front-end design',
      'Database-driven operations',
    ],
  },
  {
    title: 'Laptop Battery Management Tool',
    slug: 'laptop-battery-management-tool',
    description:
      'Cross-platform battery management solution that monitors battery levels and prevents overcharging through intelligent charging control and OS notifications.',
    stack: ['Python', 'C++', 'JavaScript', 'Rust', 'C', 'Electron'],
    github: 'https://github.com/stephenombuya/Laptop-Battery-Management-Tool',
    demo: 'https://lbm-demo.com',
    image: LBMTool,
    tag: 'Systems · Desktop',
    overview:
      'A system utility focused on battery health monitoring and proactive device protection.',
    challenge:
      'The hardest part was packing accurate battery monitoring and platform-level notifications into a reliable tool.',
    outcome:
      'The project resulted in a practical solution for improving battery longevity and user awareness.',
    highlights: [
      'Battery health monitoring',
      'Cross-platform desktop support',
      'Custom notifications and alerts',
      'Low-level system integration',
    ],
  },
]

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug)

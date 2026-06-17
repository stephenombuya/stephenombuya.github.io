import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { posts } from '../data/posts'

export default function BlogPage() {
  return (
    <section className="py-32 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="section-label">Insights</p>
          <h1 className="section-title text-5xl md:text-6xl">Blog <em className="text-amber-400">& News</em></h1>
          <p className="font-body text-gray-400 mt-6 max-w-2xl leading-relaxed">
            Thoughts on software engineering, product building, and practical lessons learned from real projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group card-base card-hover">
              <div className="overflow-hidden mb-6 aspect-[16/10]">
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
              <h2 className="font-display text-3xl text-cream mb-3">{post.title}</h2>
              <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-400">{post.date}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 hover:text-amber-soft transition-colors"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

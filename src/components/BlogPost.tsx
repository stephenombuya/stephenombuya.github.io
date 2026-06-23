import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'
import { posts } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="py-32 min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="section-label">Post Not Found</p>
          <Link to="/blog" className="btn-primary rounded-full mt-6 inline-flex">
            Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-32 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover mb-10" />

        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 font-mono mb-4">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <p className="font-mono text-xs text-amber-400 mb-4">{post.date}</p>
        <h1 className="font-display text-5xl md:text-6xl text-cream mb-8">{post.title}</h1>

        <div className="space-y-6">
          {post.content.map((paragraph) => (
            <div key={paragraph} className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={14} className="text-amber-400" />
              </div>

              <p className="font-body text-gray-300 leading-relaxed text-lg">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto link
    const mailto = `mailto:michiekaombuya@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-32 bg-surface relative" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-400/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="mb-20">
          <p className="animate-in section-label">Get In Touch</p>
          <h2 className="animate-in section-title">
            Let's <em className="text-amber-400">Connect</em>
          </h2>
          <span className="animate-in gold-line" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="animate-in">
              <p className="font-body text-gray-300 text-lg leading-relaxed">
                Have a project in mind? Looking for a dedicated backend engineer? I'd love to
                hear from you. Let's discuss how I can help bring your vision to life.
              </p>
            </div>

            <div className="animate-in space-y-4">
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'michiekaombuya@gmail.com', href: 'mailto:michiekaombuya@gmail.com' },
                { icon: <MapPin size={16} />, label: 'Location', value: 'Nairobi, Kenya', href: undefined },
                { icon: <Github size={16} />, label: 'GitHub', value: '@stephenombuya', href: 'https://github.com/stephenombuya' },
                { icon: <Linkedin size={16} />, label: 'LinkedIn', value: 'stephen-ombuya', href: 'https://www.linkedin.com/in/stephen-ombuya/' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 border border-border hover:border-amber-400/30 transition-colors group">
                  <div className="w-9 h-9 flex items-center justify-center border border-border group-hover:border-amber-400/40 text-amber-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-xs text-gray-500 uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="font-body text-sm text-cream hover:text-amber-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-cream">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="animate-in flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <p className="font-body text-sm text-green-400">Available for freelance projects</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="animate-in card-base">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <CheckCircle size={48} className="text-amber-400" />
                  <p className="font-display text-2xl text-cream">Message Sent!</p>
                  <p className="font-body text-gray-400 text-sm">Your email client should have opened. Talk soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                        Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-obsidian border border-border px-4 py-3 font-body text-sm text-cream placeholder:text-gray-600 focus:outline-none focus:border-amber-400/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-obsidian border border-border px-4 py-3 font-body text-sm text-cream placeholder:text-gray-600 focus:outline-none focus:border-amber-400/60 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full bg-obsidian border border-border px-4 py-3 font-body text-sm text-cream placeholder:text-gray-600 focus:outline-none focus:border-amber-400/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs text-gray-500 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full bg-obsidian border border-border px-4 py-3 font-body text-sm text-cream placeholder:text-gray-600 focus:outline-none focus:border-amber-400/60 transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full rounded-full justify-center">
                    <Send size={15} />
                    Send Message
                  </button>
                  <p className="font-body text-xs text-gray-600 text-center">
                    This will open your email client with the message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

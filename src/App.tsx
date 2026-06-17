import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import BlogPage from './components/BlogPage'
import BlogPost from './components/BlogPost'
import Services from './components/Services'
import Contact from './components/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

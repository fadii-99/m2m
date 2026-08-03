import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

import Home from './pages/Home'
import Calling from './pages/Calling'
import Messaging from './pages/Messaging'
import Status from './pages/Status'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Download from './pages/Download'

/** Jump to the top whenever the route changes (but keep #anchor jumps). */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calling" element={<Calling />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/status" element={<Status />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}

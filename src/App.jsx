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
import Terms from './pages/Terms'
import DeleteAccount from './pages/DeleteAccount'
import CommunityGuidelines from './pages/CommunityGuidelines'
import Contact from './pages/Contact'
import Download from './pages/Download'

const ALIASES = {
  '/privacy-policy': '/privacy',
  '/terms-and-conditions': '/terms',
  '/terms-of-service': '/terms',
  '/tos': '/terms',
  '/account-deletion': '/delete-account',
  '/delete': '/delete-account',
  '/guidelines': '/community-guidelines',
}

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
        <Route path="/terms" element={<Terms />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
        {/* Common spellings of the legal URLs, so links typed from memory still land. */}
        {Object.entries(ALIASES).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}

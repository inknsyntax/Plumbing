import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { globalStyles } from './styles/globals'
import {
  generateLocalBusinessSchema,
  generateProfessionalServiceSchema,
  generateAggregateReviewSchema,
} from './utils/schema'
import './App.css'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    // Inject Schema.org markup into document head (once on mount, not on every route change)
    const localBusinessSchema = document.createElement('script')
    localBusinessSchema.type = 'application/ld+json'
    localBusinessSchema.textContent = JSON.stringify(
      generateLocalBusinessSchema({
        name: 'Chicago Highlight Plumbing',
        description: 'Licensed, insured, trusted Chicago plumbing company. Emergency & scheduled service, residential & commercial.',
        telephone: '+1-555-234-5678',
        address: {
          streetAddress: 'Chicago, IL',
          addressLocality: 'Chicago',
          addressRegion: 'IL',
          postalCode: '60601',
          addressCountry: 'US',
        },
        email: 'contact@chicagohighlight.com',
        foundingDate: '2015-01-01',
        sameAs: [],
        areaServed: ['Chicago', 'Illinois'],
        priceRange: '$$',
      })
    )
    document.head.appendChild(localBusinessSchema)

    const professionalSchema = document.createElement('script')
    professionalSchema.type = 'application/ld+json'
    professionalSchema.textContent = JSON.stringify(generateProfessionalServiceSchema())
    document.head.appendChild(professionalSchema)

    const reviewSchema = document.createElement('script')
    reviewSchema.type = 'application/ld+json'
    reviewSchema.textContent = JSON.stringify(generateAggregateReviewSchema(4.9, 187))
    document.head.appendChild(reviewSchema)

    const styleTag = document.createElement('style')
    styleTag.textContent = globalStyles
    document.head.appendChild(styleTag)

    return () => {
      document.head.removeChild(localBusinessSchema)
      document.head.removeChild(professionalSchema)
      document.head.removeChild(reviewSchema)
      document.head.removeChild(styleTag)
    }
  }, []) // Empty dependency array - schema only injected once on mount

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 120px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router basename="/plumbing/">
      <AppContent />
    </Router>
  )
}

export default App

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
    // Inject Schema.org markup into document head
    const localBusinessSchema = document.createElement('script')
    localBusinessSchema.type = 'application/ld+json'
    localBusinessSchema.textContent = JSON.stringify(
      generateLocalBusinessSchema({
        name: 'Enterprise Plumbing Solutions',
        description:
          'Tier-1 industrial and residential plumbing infrastructure provider offering comprehensive solutions for complex mechanical systems.',
        telephone: '+1-XXX-XXX-XXXX',
        address: {
          streetAddress: '[Global HQ Address]',
          addressLocality: '[City]',
          addressRegion: '[State]',
          postalCode: '[Postal Code]',
          addressCountry: 'US',
        },
        email: 'dispatch@enterprise-plumbing.com',
        foundingDate: '2010-01-15',
        sameAs: [
          'https://www.linkedin.com/company/enterprise-plumbing',
          'https://www.youtube.com/channel/enterprise-plumbing',
        ],
        areaServed: [
          'United States',
          'Multi-State Operations',
          'Industrial Facilities',
          'Residential Properties',
        ],
        priceRange: '$$$',
      })
    )
    document.head.appendChild(localBusinessSchema)

    const professionalSchema = document.createElement('script')
    professionalSchema.type = 'application/ld+json'
    professionalSchema.textContent = JSON.stringify(
      generateProfessionalServiceSchema()
    )
    document.head.appendChild(professionalSchema)

    const reviewSchema = document.createElement('script')
    reviewSchema.type = 'application/ld+json'
    reviewSchema.textContent = JSON.stringify(
      generateAggregateReviewSchema(4.9, 187)
    )
    document.head.appendChild(reviewSchema)

    const styleTag = document.createElement('style')
    styleTag.textContent = globalStyles
    document.head.appendChild(styleTag)

    // Scroll to top on route change
    window.scrollTo(0, 0)

    return () => {
      document.head.removeChild(localBusinessSchema)
      document.head.removeChild(professionalSchema)
      document.head.removeChild(reviewSchema)
      document.head.removeChild(styleTag)
    }
  }, [location])

  const handleRequestProposal = () => {
    alert(
      'RFP Module: Initiate formal proposal request. Integration with secure client portal.'
    )
  }

  const handleEmergency = () => {
    alert(
      'EMERGENCY DISPATCH: Contact 24/7 response team. Dial 1-XXX-EMERGENCY'
    )
  }

  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 120px)' }}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onRequestProposal={handleRequestProposal}
                onEmergency={handleEmergency}
              />
            }
          />
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

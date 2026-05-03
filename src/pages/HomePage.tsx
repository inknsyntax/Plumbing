import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Forum from '../components/Forum'

export default function HomePage() {
  return (
    <div style={{ animation: 'fadeIn 0.6s ease-in-out' }}>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Forum />
    </div>
  )
}

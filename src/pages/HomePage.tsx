import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Forum from '../components/Forum'

interface HomePageProps {
  onRequestProposal?: () => void
  onEmergency?: () => void
}

export default function HomePage({
  onRequestProposal,
  onEmergency,
}: HomePageProps) {
  return (
    <div style={{ animation: 'fadeIn 0.6s ease-in-out' }}>
      <Hero
        onRequestProposal={onRequestProposal}
        onEmergency={onEmergency}
      />
      <Services />
      <Gallery />
      <Testimonials />
      <Forum />
    </div>
  )
}

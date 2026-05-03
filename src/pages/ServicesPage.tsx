import { COLORS, SPACING } from '../utils/constants'

interface ServiceDetail {
  title: string
  category: string
  description: string
  specifications: string[]
  benefits: string[]
  icon: string
  projectCount: number
}

const serviceDetails: ServiceDetail[] = [
  {
    title: 'Industrial Solutions',
    category: 'INDUSTRIAL',
    description:
      'Mission-critical hydraulic infrastructure for manufacturing, processing, and heavy industrial applications. Engineered for extreme pressure environments exceeding 2500+ PSI.',
    specifications: [
      'Pressure Range: 2500-5000 PSI',
      'Material: ASME Grade A Stainless',
      'Compliance: ASME B31.1, B31.3, B31.9',
      'Testing: Hydrostatic @ 1.5x rated pressure',
      'Certification: ISO 9001, ISO 14001',
    ],
    benefits: [
      'Zero-downtime installation protocols',
      'Predictive maintenance analytics',
      '24/7 emergency response team',
      'Full system diagnostics included',
    ],
    icon: '◆',
    projectCount: 247,
  },
  {
    title: 'Residential Infrastructure',
    category: 'RESIDENTIAL',
    description:
      'Complete piping systems for multi-unit residential facilities. IPC 2021 and IRC compliant installations for apartments, condominiums, and residential complexes.',
    specifications: [
      'Pressure Range: 40-80 PSI',
      'Material: PEX-A, Copper, or Stainless',
      'Compliance: IPC 2021, IRC 2021',
      'Testing: Water pressure test @ 80 PSI',
      'Certification: EPA Lead-Free',
    ],
    benefits: [
      'Lifetime corrosion warranties',
      'Silent operation design',
      'Water efficiency optimization',
      'Seismic resilience engineering',
    ],
    icon: '▪',
    projectCount: 512,
  },
  {
    title: 'Preventative Maintenance',
    category: 'MAINTENANCE',
    description:
      'Strategic maintenance programs extending system lifespan by 15-30%. Scheduled assessments prevent catastrophic failures and optimize operational efficiency.',
    specifications: [
      'Inspection Interval: 6-12 months',
      'Assessment Method: Video scope, flow rate',
      'Reporting: Detailed technical analysis',
      'Certification: Maintenance Log ISO 19011',
      'Response Time: 48 hours',
    ],
    benefits: [
      'Extend system life 15-30%',
      'Reduce emergency repairs 85%',
      'Lower operational costs 20-40%',
      'Compliance verification included',
    ],
    icon: '◉',
    projectCount: 890,
  },
]

const theme = {
  colors: COLORS,
  spacing: SPACING,
}

export default function ServicesPage() {
  return (
    <div style={{ animation: 'fadeIn 0.6s ease-in-out' }}>
      <style>{`
        .services-detail-header {
          background: linear-gradient(135deg, ${theme.colors.obsidianGray} 0%, ${theme.colors.brushedSteel} 100%);
          color: ${theme.colors.sterileWhite};
          padding: 6rem 2rem;
          text-align: center;
          animation: slideDown 0.8s ease-out;
          border-bottom: 3px solid ${theme.colors.cobaltBlue};
        }

        .services-detail-header h1 {
          font-size: 2.5rem;
          margin-bottom: ${theme.spacing.md};
          letter-spacing: 0.15em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .services-detail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card-detail {
          background: ${theme.colors.sterileWhite};
          border: 2px solid ${theme.colors.cobaltBlue};
          padding: 2.5rem;
          border-radius: 0;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
          position: relative;
          overflow: hidden;
        }

        .service-card-detail::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, ${theme.colors.cobaltBlue}, ${theme.colors.brushedSteel});
          animation: expandWidth 0.8s ease-out;
          animation-fill-mode: both;
        }

        .service-card-detail:nth-child(1) { animation-delay: 0.1s; }
        .service-card-detail:nth-child(2) { animation-delay: 0.2s; }
        .service-card-detail:nth-child(3) { animation-delay: 0.3s; }
        .service-card-detail:nth-child(1)::before { animation-delay: 0.15s; }
        .service-card-detail:nth-child(2)::before { animation-delay: 0.25s; }
        .service-card-detail:nth-child(3)::before { animation-delay: 0.35s; }

        .service-card-detail:hover {
          border-color: ${theme.colors.obsidianGray};
          box-shadow: 0 25px 50px rgba(0, 71, 171, 0.2);
          transform: translateY(-10px);
        }

        .service-icon {
          font-size: 3.5rem;
          margin-bottom: ${theme.spacing.md};
          display: block;
          animation: scaleIn 0.6s ease-out backwards;
          color: ${theme.colors.cobaltBlue};
        }

        .service-card-detail:nth-child(1) .service-icon { animation-delay: 0.2s; }
        .service-card-detail:nth-child(2) .service-icon { animation-delay: 0.3s; }
        .service-card-detail:nth-child(3) .service-icon { animation-delay: 0.4s; }

        .service-card-detail:hover .service-icon {
          animation: rotateSpin 0.6s ease-out;
        }

        .service-card-detail h2 {
          font-size: 1.5rem;
          color: ${theme.colors.obsidianGray};
          margin-bottom: ${theme.spacing.sm};
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .service-category {
          color: ${theme.colors.cobaltBlue};
          font-size: 0.7rem;
          font-weight: 800;
          margin-bottom: ${theme.spacing.md};
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid ${theme.colors.cobaltBlue};
          display: inline-block;
        }

        .service-card-detail p {
          color: ${theme.colors.brushedSteel};
          line-height: 1.7;
          margin-bottom: ${theme.spacing.lg};
          font-size: 0.95rem;
        }

        .specs-section, .benefits-section {
          margin-bottom: ${theme.spacing.lg};
        }

        .section-title {
          font-size: 0.8rem;
          font-weight: 800;
          color: ${theme.colors.obsidianGray};
          margin-bottom: ${theme.spacing.md};
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(0, 71, 171, 0.15);
        }

        .specs-list, .benefits-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .specs-list li, .benefits-list li {
          font-family: 'Roboto Mono', monospace;
          font-size: 0.8rem;
          color: ${theme.colors.brushedSteel};
          margin-bottom: 0.7rem;
          padding-left: 1.8rem;
          position: relative;
          border-bottom: 1px solid rgba(169, 169, 169, 0.08);
          padding-bottom: 0.6rem;
          transition: all 0.3s ease;
        }

        .specs-list li:hover, .benefits-list li:hover {
          padding-left: 2rem;
          color: ${theme.colors.cobaltBlue};
        }

        .specs-list li:before {
          content: '▸';
          position: absolute;
          left: 0;
          color: ${theme.colors.cobaltBlue};
          font-weight: bold;
        }

        .benefits-list li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: ${theme.colors.successGreen};
          font-weight: bold;
          font-size: 1.1em;
        }

        .project-count {
          display: inline-block;
          background: linear-gradient(135deg, rgba(0, 71, 171, 0.08) 0%, rgba(56, 142, 60, 0.08) 100%);
          color: ${theme.colors.cobaltBlue};
          padding: 0.6rem 1.2rem;
          border-radius: 0;
          font-size: 0.75rem;
          font-weight: 700;
          margin-top: ${theme.spacing.md};
          border: 1px solid ${theme.colors.cobaltBlue};
          letter-spacing: 0.08em;
          transition: all 0.3s ease;
        }

        .project-count:hover {
          background: rgba(0, 71, 171, 0.1);
          transform: scale(1.05);
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateSpin {
          from {
            transform: rotateZ(0deg);
          }
          to {
            transform: rotateZ(360deg);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .services-detail-header {
            padding: 3rem 1.5rem;
          }

          .services-detail-header h1 {
            font-size: 2rem;
          }

          .services-detail-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem 1rem;
          }
        }
      `}</style>

      <div className="services-detail-header">
        <h1>SERVICE MATRIX</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
          Comprehensive engineering solutions for plumbing infrastructure
        </p>
      </div>

      <div className="services-detail-grid">
        {serviceDetails.map((service, idx) => (
          <div key={idx} className="service-card-detail">
            <div className="service-icon">{service.icon}</div>
            <div className="service-category">{service.category}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>

            <div className="specs-section">
              <div className="section-title">Specifications</div>
              <ul className="specs-list">
                {service.specifications.map((spec, sidx) => (
                  <li key={sidx}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="benefits-section">
              <div className="section-title">Key Benefits</div>
              <ul className="benefits-list">
                {service.benefits.map((benefit, bidx) => (
                  <li key={bidx}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="project-count">{service.projectCount}+ PROJECTS</div>
          </div>
        ))}
      </div>
    </div>
  )
}

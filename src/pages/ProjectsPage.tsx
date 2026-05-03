interface Project {
  id: string
  name: string
  location: string
  scope: string
  duration: string
  investment: string
  metrics: string[]
  image: string
  status: 'COMPLETED' | 'IN-PROGRESS'
}

const featuredProjects: Project[] = [
  {
    id: '2024-001',
    name: 'PEX Water Line Replacement',
    location: 'Lincoln Square, Chicago',
    scope: 'Complete copper to PEX conversion for 4-unit residential building. Replaced aging copper lines with modern PEX tubing, improving water quality and reducing corrosion issues.',
    duration: '2 days',
    investment: '$3,200',
    metrics: [
      '✓ No more water discoloration',
      '✓ Improved water pressure',
      '✓ 50-year pipe warranty',
      '✓ Installed leak detection',
    ],
    image: 'images/work/Copper PEX Replacement.png',
    status: 'COMPLETED',
  },
  {
    id: '2024-002',
    name: 'High-Flow Manifold Installation',
    location: 'Bucktown, Chicago',
    scope: 'Installed advanced high-pressure manifold system for multi-unit building. This professional-grade equipment handles multiple supply lines with precision control.',
    duration: '1 day',
    investment: '$2,100',
    metrics: [
      '✓ Professional manifold system',
      '✓ Precise pressure control',
      '✓ Multiple supply support',
      '✓ Future-proof design',
    ],
    image: 'images/work/High-Pressure Manifold.png',
    status: 'COMPLETED',
  },
  {
    id: '2024-003',
    name: 'Residential Drain System Overhaul',
    location: 'Wicker Park, Chicago',
    scope: 'Complete drain cleaning and repair project. Used descaling treatment protocol to remove years of buildup, restored full water flow, and repaired damaged sections.',
    duration: '4 hours',
    investment: '$1,850',
    metrics: [
      '✓ Chemical-free descaling',
      '✓ Full water restoration',
      '✓ No blockages remaining',
      '✓ 2-year guarantee',
    ],
    image: 'images/work/Descaling Treatment Protocol.png',
    status: 'COMPLETED',
  },
  {
    id: '2024-004',
    name: 'Commercial Building Water Distribution',
    location: 'Loop District, Chicago',
    scope: 'Designed and installed complete potable water distribution system for 8-story commercial building. Includes pressure regulation, filtration, and emergency shut-off valves.',
    duration: '3 weeks',
    investment: '$12,500',
    metrics: [
      '✓ Code-compliant installation',
      '✓ Full redundancy system',
      '✓ Smart metering included',
      '✓ Certified by city inspector',
    ],
    image: 'images/work/Potable Water Distribution.png',
    status: 'COMPLETED',
  },
  {
    id: '2024-005',
    name: 'Emergency Water Main Repair',
    location: 'Lakeview, Chicago',
    scope: 'Emergency response to burst water main affecting 20+ residential units. Rapid diagnosis, temporary repair, and full replacement completed within 6 hours.',
    duration: '6 hours',
    investment: '$4,500',
    metrics: [
      '✓ Same-day response',
      '✓ Minimal disruption',
      '✓ Zero water damage',
      '✓ Full system restored',
    ],
    image: 'images/work/plumbing123-1024x707.jpg',
    status: 'COMPLETED',
  },
  {
    id: '2024-006',
    name: 'Preventive Maintenance Program',
    location: 'Multiple Locations',
    scope: 'Ongoing preventive maintenance for 15 residential properties. Quarterly inspections, valve maintenance, and early leak detection saved customers thousands in emergency repairs.',
    duration: 'Ongoing',
    investment: '$95/month per unit',
    metrics: [
      '✓ Quarterly inspections',
      '✓ Early leak detection',
      '✓ 24/7 priority service',
      '✓ Preventive repairs included',
    ],
    image: 'images/work/Chilled Water Loop.png',
    status: 'IN-PROGRESS',
  },
  {
    id: '2024-007',
    name: 'Advanced Water System Installation',
    location: 'Hyde Park, Chicago',
    scope: 'Installed professional-grade water treatment and distribution system with advanced filtration for luxury residential building. Included smart monitoring and automated valve systems.',
    duration: '2 weeks',
    investment: '$8,500',
    metrics: [
      '✓ Professional equipment',
      '✓ Smart water monitoring',
      '✓ Advanced filtration system',
      '✓ 24/7 emergency support',
    ],
    image: 'images/work/Medical Gas Vacuum.png',
    status: 'COMPLETED',
  },
]

const theme = {
  colors: {
    obsidianGray: '#1A1A1B',
    sterileWhite: '#F5F5F7',
    cobaltBlue: '#0047AB',
    brushedSteel: '#A9A9A9',
    warningRed: '#D32F2F',
    successGreen: '#388E3C',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
}

export default function ProjectsPage() {
  return (
    <div style={{ animation: 'fadeIn 0.6s ease-in-out' }}>
      <style>{`
        .projects-header {
          background: linear-gradient(135deg, ${theme.colors.obsidianGray} 0%, ${theme.colors.brushedSteel} 100%);
          color: ${theme.colors.sterileWhite};
          padding: 6rem 2rem;
          text-align: center;
          animation: slideDown 0.8s ease-out;
        }

        .projects-header h1 {
          font-size: 2.5rem;
          margin-bottom: ${theme.spacing.md};
          letter-spacing: 0.1em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .projects-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .stat-box {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: ${theme.colors.cobaltBlue};
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.9;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
          padding: 4rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .project-card {
          background: ${theme.colors.sterileWhite};
          border: 1px solid rgba(0, 71, 171, 0.1);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
          position: relative;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.1s; }
        .project-card:nth-child(5) { animation-delay: 0.2s; }
        .project-card:nth-child(6) { animation-delay: 0.3s; }

        .project-card:hover {
          border-color: ${theme.colors.cobaltBlue};
          box-shadow: 0 25px 50px rgba(0, 71, 171, 0.2);
          transform: translateY(-10px);
        }

        .project-card:hover .project-icon {
          animation: bounce 0.6s ease-out;
        }

        .project-header {
          background: linear-gradient(135deg, rgba(0, 71, 171, 0.05) 0%, rgba(169, 169, 169, 0.05) 100%);
          padding: 2rem;
          border-bottom: 1px solid rgba(0, 71, 171, 0.1);
          position: relative;
        }

        .project-status {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.4rem 0.8rem;
          border-radius: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-status.completed {
          background: rgba(56, 142, 60, 0.1);
          color: ${theme.colors.successGreen};
          border: 1px solid ${theme.colors.successGreen};
        }

        .project-status.in-progress {
          background: rgba(211, 47, 47, 0.1);
          color: ${theme.colors.warningRed};
          border: 1px solid ${theme.colors.warningRed};
        }

        .project-icon {
          font-size: 2.5rem;
          margin-bottom: ${theme.spacing.md};
          display: none;
        }

        .project-id {
          font-family: 'Roboto Mono', monospace;
          font-size: 0.75rem;
          color: ${theme.colors.cobaltBlue};
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .project-card h2 {
          font-size: 1.3rem;
          color: ${theme.colors.obsidianGray};
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .project-location {
          font-size: 0.9rem;
          color: ${theme.colors.brushedSteel};
          margin-bottom: ${theme.spacing.md};
        }

        .project-body {
          padding: 2rem;
        }

        .project-body p {
          color: ${theme.colors.brushedSteel};
          line-height: 1.6;
          margin-bottom: ${theme.spacing.lg};
          font-size: 0.95rem;
        }

        .project-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: ${theme.spacing.lg};
        }

        .detail-item {
          font-size: 0.85rem;
        }

        .detail-label {
          color: ${theme.colors.cobaltBlue};
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.3rem;
          font-size: 0.75rem;
        }

        .detail-value {
          color: ${theme.colors.obsidianGray};
          font-weight: 500;
          font-family: 'Roboto Mono', monospace;
        }

        .metrics-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid rgba(169, 169, 169, 0.1);
          padding-top: ${theme.spacing.md};
        }

        .metrics-list li {
          font-family: 'Roboto Mono', monospace;
          font-size: 0.8rem;
          color: ${theme.colors.brushedSteel};
          margin-bottom: 0.6rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .metrics-list li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: ${theme.colors.successGreen};
          font-weight: bold;
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

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          .projects-header {
            padding: 3rem 1.5rem;
          }

          .projects-header h1 {
            font-size: 2rem;
          }

          .projects-stats {
            gap: 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem 1rem;
          }

          .project-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="projects-header">
        <h1>COMPLETED PROJECTS</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
          Real work from real Chicago plumbers
        </p>

        <div className="projects-stats">
          <div className="stat-box">
            <div className="stat-number">250+</div>
            <div className="stat-label">Projects This Year</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">$1.2M</div>
            <div className="stat-label">Total Work Value</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">4.9★</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div style={{
              width: '100%',
              height: '220px',
              overflow: 'hidden',
              background: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={project.image} 
                alt={project.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            <div className="project-header">
              <div
                className={`project-status ${project.status.toLowerCase().replace('-', '')}`}
              >
                {project.status}
              </div>
              <div className="project-id">{project.id}</div>
              <h2>{project.name}</h2>
              <div className="project-location">📍 {project.location}</div>
            </div>

            <div className="project-body">
              <p>{project.scope}</p>

              <div className="project-details">
                <div className="detail-item">
                  <div className="detail-label">Duration</div>
                  <div className="detail-value">{project.duration}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Investment</div>
                  <div className="detail-value">{project.investment}</div>
                </div>
              </div>

              <ul className="metrics-list">
                {project.metrics.map((metric, idx) => (
                  <li key={idx}>{metric}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

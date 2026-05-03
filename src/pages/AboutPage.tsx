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

export default function AboutPage() {
  return (
    <div style={{ animation: 'fadeIn 0.6s ease-in-out' }}>
      <style>{`
        .about-hero {
          background: linear-gradient(135deg, ${theme.colors.obsidianGray} 0%, ${theme.colors.brushedSteel} 100%);
          color: ${theme.colors.sterileWhite};
          padding: 6rem 2rem;
          text-align: center;
          animation: slideDown 0.8s ease-out;
        }

        .about-hero h1 {
          font-size: 2.5rem;
          margin-bottom: ${theme.spacing.md};
          letter-spacing: 0.1em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .about-section {
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .about-section h2 {
          font-size: 1.8rem;
          color: ${theme.colors.obsidianGray};
          margin-bottom: ${theme.spacing.lg};
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
          padding-bottom: 1rem;
          border-bottom: 2px solid ${theme.colors.cobaltBlue};
        }

        .about-section p {
          color: ${theme.colors.brushedSteel};
          line-height: 1.8;
          font-size: 1rem;
          margin-bottom: ${theme.spacing.lg};
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .value-card {
          background: rgba(0, 71, 171, 0.02);
          border: 1px solid rgba(0, 71, 171, 0.1);
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          background: rgba(0, 71, 171, 0.05);
          border-color: ${theme.colors.cobaltBlue};
        }

        .value-card h3 {
          color: ${theme.colors.cobaltBlue};
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: ${theme.spacing.md};
          font-weight: 600;
        }

        .value-card p {
          font-size: 0.95rem;
          color: ${theme.colors.brushedSteel};
          line-height: 1.6;
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline-item {
          margin-bottom: 3rem;
          padding-left: 3rem;
          position: relative;
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .timeline-item:nth-child(1) { animation-delay: 0.2s; }
        .timeline-item:nth-child(2) { animation-delay: 0.3s; }
        .timeline-item:nth-child(3) { animation-delay: 0.4s; }
        .timeline-item:nth-child(4) { animation-delay: 0.5s; }

        .timeline-item:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
          height: 20px;
          background: ${theme.colors.cobaltBlue};
          border: 3px solid ${theme.colors.sterileWhite};
          border-radius: 50%;
          box-shadow: 0 0 0 3px ${theme.colors.cobaltBlue};
        }

        .timeline-item:after {
          content: '';
          position: absolute;
          left: 8px;
          top: 20px;
          width: 4px;
          height: 60px;
          background: ${theme.colors.cobaltBlue};
          opacity: 0.2;
        }

        .timeline-item:last-child:after {
          display: none;
        }

        .timeline-year {
          font-family: 'Roboto Mono', monospace;
          color: ${theme.colors.cobaltBlue};
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .timeline-title {
          color: ${theme.colors.obsidianGray};
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .timeline-description {
          color: ${theme.colors.brushedSteel};
          font-size: 0.95rem;
          margin-top: 0.5rem;
          line-height: 1.6;
        }

        .certifications {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .cert-badge {
          background: rgba(56, 142, 60, 0.05);
          border: 1px solid ${theme.colors.successGreen};
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .cert-badge:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(56, 142, 60, 0.15);
        }

        .cert-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .cert-name {
          color: ${theme.colors.obsidianGray};
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
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
          .about-hero h1 {
            font-size: 2rem;
          }

          .about-section h2 {
            font-size: 1.4rem;
          }

          .about-content {
            padding: 2rem 1rem;
          }
        }
      `}</style>

      <div className="about-hero">
        <h1>ABOUT CHICAGO HIGHLIGHT PLUMBING</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
          Licensed, insured, and trusted by Chicago families since 2015
        </p>
      </div>

      <div className="about-content">
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '2rem'
        }}>
          <img 
            src="images/badges/Logo.png" 
            alt="Chicago Highlight Plumbing Badge"
            style={{
              maxWidth: '200px',
              height: 'auto',
              animation: 'fadeIn 0.8s ease-in-out'
            }}
          />
        </div>

        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            We're a professional plumbing company serving Chicago and the surrounding areas. We fix leaks, unplug drains, install new fixtures, and handle emergency water main breaks. No corporate jargon—just licensed plumbers who show up on time, fix the problem, and charge a fair price.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Do</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Drain Cleaning</h3>
              <p>
                Clogs, backups, slow drains—we clear them fast. No chemicals needed, just professional equipment and years of experience.
              </p>
            </div>
            <div className="value-card">
              <h3>Water Line Work</h3>
              <p>
                Old copper pipes? Cracked mains? We replace water lines with modern, durable materials. New customers love the improved water quality.
              </p>
            </div>
            <div className="value-card">
              <h3>Fixture Installation</h3>
              <p>
                New faucets, sinks, toilets, showers—we install everything correctly. All work comes with a 1-year guarantee.
              </p>
            </div>
            <div className="value-card">
              <h3>Leak Detection</h3>
              <p>
                Find hidden leaks before they cost thousands in water damage. We use professional equipment to pinpoint the exact location.
              </p>
            </div>
            <div className="value-card">
              <h3>Emergency Service</h3>
              <p>
                24/7 availability. Water main breaks, burst pipes, backed-up sewers—we respond the same day, often within hours.
              </p>
            </div>
            <div className="value-card">
              <h3>Preventive Maintenance</h3>
              <p>
                Quarterly inspections, valve checks, and early leak detection save customers thousands in emergency repairs.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Every plumber on our team is licensed, insured, and trained to handle the full range of residential and commercial plumbing work. We don't hire inexperienced crew—every person who shows up at your door knows how to do the job right, the first time.
          </p>
          <p>
            We're also not some massive corporation where you get transferred between departments. When you call us, you talk to the people who will actually do your work.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Licensed & Insured</h3>
              <p>
                Full licensing and comprehensive insurance coverage. You're protected on every job.
              </p>
            </div>
            <div className="value-card">
              <h3>Honest Pricing</h3>
              <p>
                No hidden fees. We quote the job, we stick to the quote. If something unexpected comes up, we ask first.
              </p>
            </div>
            <div className="value-card">
              <h3>Same-Day Service</h3>
              <p>
                Call us today, we come today. Emergency service available 24/7/365.
              </p>
            </div>
            <div className="value-card">
              <h3>Work Guaranteed</h3>
              <p>
                Everything we install comes with a warranty. If something fails, we fix it free.
              </p>
            </div>
            <div className="value-card">
              <h3>Professional Service</h3>
              <p>
                Clean, respectful service. We protect your home, explain the work, and leave your space clean.
              </p>
            </div>
            <div className="value-card">
              <h3>Real Results</h3>
              <p>
                400+ 5-star reviews from Chicago homeowners. Our customers are our best advertisement.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Ready to work with us?</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <strong style={{ color: theme.colors.warningRed, fontSize: '1.3rem' }}>
              (555) 234-5678
            </strong>
            <br />
            Call anytime—we're here to help. No job too small, no emergency too big.
          </p>
        </div>
      </div>
    </div>
  )
}

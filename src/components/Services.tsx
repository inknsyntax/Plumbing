import React from 'react';
import { theme } from '../styles/theme';

const styles = `
  .services-section {
    max-width: 1440px;
    margin: 0 auto;
    padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  }

  .services-header {
    text-align: center;
    margin-bottom: ${theme.spacing.xxl};
  }

  .services-header h2 {
    font-size: ${theme.typography.sizes.h2};
    margin-bottom: ${theme.spacing.md};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .services-header p {
    font-family: ${theme.typography.fontFamily.mono};
    color: ${theme.colors.brushedSteel};
    font-size: ${theme.typography.sizes.body};
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.xxl};
  }

  .service-card {
    background-color: ${theme.colors.sterileWhite};
    border: ${theme.borders.weight} solid ${theme.colors.borderGray};
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: ${theme.shadows.minimal};
  }

  .service-card:hover {
    border-color: ${theme.colors.cobaltBlue};
    box-shadow: ${theme.shadows.card};
    transform: translateY(-4px);
  }

  .service-image {
    width: 100%;
    height: 220px;
    background: linear-gradient(135deg, ${theme.colors.obsidianGray}, ${theme.colors.brushedSteel});
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.sterileWhite};
    font-size: 3rem;
    position: relative;
  }

  .service-image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    color: ${theme.colors.sterileWhite};
    font-size: 1rem;
    text-align: center;
    padding: ${theme.spacing.md};
  }

  .service-content {
    padding: ${theme.spacing.lg};
  }

  .service-icon {
    font-size: 2.5rem;
    margin-bottom: ${theme.spacing.md};
    display: inline-block;
  }

  .service-title {
    font-size: ${theme.typography.sizes.h4};
    margin-bottom: ${theme.spacing.sm};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .service-description {
    font-size: ${theme.typography.sizes.body};
    line-height: ${theme.typography.lineHeight.normal};
    color: ${theme.colors.systemGray};
  }

  .service-specs {
    margin-top: ${theme.spacing.md};
    padding-top: ${theme.spacing.md};
    border-top: ${theme.borders.weight} solid ${theme.colors.borderGray};
    font-size: ${theme.typography.sizes.small};
    font-family: ${theme.typography.fontFamily.mono};
    color: ${theme.colors.brushedSteel};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    .services-section {
      padding: ${theme.spacing.xl} ${theme.spacing.md};
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: ${theme.spacing.md};
    }

    .services-header h2 {
      font-size: ${theme.typography.sizes.h3};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    .services-section {
      padding: ${theme.spacing.lg} ${theme.spacing.sm};
    }

    .services-header {
      margin-bottom: ${theme.spacing.lg};
    }

    .service-card {
      padding: ${theme.spacing.md};
    }

    .service-icon {
      font-size: 2rem;
    }

    .service-title {
      font-size: ${theme.typography.sizes.h4};
    }
  }
`;

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  specs: string[];
}

const services: ServiceItem[] = [
  {
    id: 'drain-cleaning',
    icon: '▬',
    title: 'Drain Cleaning & Repair',
    description: 'Fast drain unclogging, line clearing, and sewer services.',
    image: 'images/services/drain-repair-featured-image-1.jpg',
    specs: [
      '✓ Same-day service',
      '✓ 24/7 emergency available',
      '✓ 2-year guarantee',
    ],
  },
  {
    id: 'water-lines',
    icon: '▬',
    title: 'Water Line Installation',
    description: 'New water line installation, replacement, and repair.',
    image: 'images/services/Water-line-installation.jpg',
    specs: [
      '✓ Copper & PEX certified',
      '✓ Licensed plumbers',
      '✓ Code compliant',
    ],
  },
  {
    id: 'fixtures',
    icon: '▬',
    title: 'Fixture Installation',
    description: 'Sinks, toilets, faucets, and water heater installation.',
    image: 'images/services/light-fixture-replacement.avif',
    specs: [
      '✓ All brands supported',
      '✓ Professional installation',
      '✓ Warranty included',
    ],
  },
  {
    id: 'leak-detection',
    icon: '▬',
    title: 'Leak Detection & Repair',
    description: 'Find and fix hidden leaks before they cause damage.',
    image: 'images/services/LeakDetectionAndRepair.png',
    specs: [
      '✓ Advanced detection tech',
      '✓ Quick turnaround',
      '✓ Prevent water damage',
    ],
  },
  {
    id: 'maintenance',
    icon: '▬',
    title: 'Preventive Maintenance',
    description: 'Regular maintenance to prevent expensive repairs.',
    image: 'images/services/PreventiveMaintenance.jpg',
    specs: [
      '✓ Monthly/quarterly service',
      '✓ Inspection included',
      '✓ Call anytime',
    ],
  },
  {
    id: 'emergency',
    icon: '▬',
    title: '24/7 Emergency Service',
    description: 'Burst pipes, major leaks, backups - we\'re here anytime.',
    image: 'images/services/24-7-emergency-service-vert.png',
    specs: [
      '✓ Always available',
      '✓ Quick response',
      '✓ Professional crew',
    ],
  },
];

const Services: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <section id="services" className="services-section">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Licensed • Insured • 24/7 Available</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img 
                src={service.image} 
                alt={service.title}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-specs">
                  {service.specs.map((spec, idx) => (
                    <div key={idx}>{spec}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;

import React from 'react';
import { theme } from '../styles/theme';

const styles = `
  .hero {
    background: linear-gradient(135deg, ${theme.colors.obsidianGray} 0%, ${theme.colors.brushedSteel} 100%);
    color: ${theme.colors.sterileWhite};
    padding: ${theme.spacing.xxl} ${theme.spacing.lg};
    text-align: center;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .hero-headline {
    font-size: 3rem;
    font-weight: ${theme.typography.weights.bold};
    margin-bottom: ${theme.spacing.lg};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: ${theme.typography.lineHeight.tight};
  }

  .hero-tagline {
    font-size: ${theme.typography.sizes.h3};
    font-weight: ${theme.typography.weights.light};
    margin-bottom: ${theme.spacing.xl};
    font-family: ${theme.typography.fontFamily.mono};
    letter-spacing: 0.05em;
  }

  .hero-cta {
    background-color: ${theme.colors.cobaltBlue};
    color: ${theme.colors.sterileWhite};
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    font-size: ${theme.typography.sizes.body};
    font-weight: ${theme.typography.weights.semibold};
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    box-shadow: ${theme.shadows.card};
    margin-right: ${theme.spacing.md};
  }

  .hero-cta:hover {
    background-color: ${theme.colors.sterileWhite};
    color: ${theme.colors.cobaltBlue};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 71, 171, 0.3);
  }

  .hero-secondary-cta {
    background-color: transparent;
    color: ${theme.colors.sterileWhite};
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    font-size: ${theme.typography.sizes.body};
    font-weight: ${theme.typography.weights.semibold};
    border: 2px solid ${theme.colors.sterileWhite};
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
  }

  .hero-secondary-cta:hover {
    background-color: ${theme.colors.sterileWhite};
    color: ${theme.colors.obsidianGray};
  }

  .cta-container {
    display: flex;
    justify-content: center;
    gap: ${theme.spacing.md};
    flex-wrap: wrap;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    .hero {
      padding: ${theme.spacing.xl} ${theme.spacing.md};
      min-height: 400px;
    }

    .hero-headline {
      font-size: 2rem;
      margin-bottom: ${theme.spacing.md};
    }

    .hero-tagline {
      font-size: ${theme.typography.sizes.h4};
      margin-bottom: ${theme.spacing.lg};
    }

    .hero-cta,
    .hero-secondary-cta {
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      font-size: ${theme.typography.sizes.small};
    }

    .cta-container {
      gap: ${theme.spacing.sm};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    .hero {
      padding: ${theme.spacing.lg} ${theme.spacing.sm};
      min-height: 300px;
    }

    .hero-headline {
      font-size: 1.5rem;
      margin-bottom: ${theme.spacing.sm};
    }

    .hero-tagline {
      font-size: ${theme.typography.sizes.body};
      margin-bottom: ${theme.spacing.md};
    }

    .hero-cta,
    .hero-secondary-cta {
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      font-size: ${theme.typography.sizes.small};
      margin: ${theme.spacing.xs};
    }

    .cta-container {
      flex-direction: column;
    }
  }
`;

interface HeroProps {
  onRequestProposal?: () => void;
  onEmergency?: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <style>{styles}</style>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-headline">
            Professional Plumbing Services
          </h1>
          <p className="hero-tagline">
            Residential & Commercial | Emergency & Scheduled Service
          </p>
          <div style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: theme.colors.warningRed,
            marginBottom: theme.spacing.xl,
            fontFamily: theme.typography.fontFamily.mono
          }}>
            📞 (555) 234-5678
          </div>
          <div className="cta-container">
            <button 
              className="hero-cta" 
              onClick={() => window.location.href = 'tel:5552345678'}
            >
              CALL FOR EMERGENCY
            </button>
            <button 
              className="hero-secondary-cta" 
              onClick={() => window.location.href = '#contact'}
            >
              REQUEST FREE ESTIMATE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from 'react';
import { theme } from '../styles/theme';

const styles = `
  .testimonials-section {
    max-width: 1440px;
    margin: 0 auto;
    padding: ${theme.spacing.xxl} ${theme.spacing.lg};
    background-color: ${theme.colors.obsidianGray};
    color: ${theme.colors.sterileWhite};
  }

  .testimonials-header {
    text-align: center;
    margin-bottom: ${theme.spacing.xxl};
  }

  .testimonials-header h2 {
    font-size: ${theme.typography.sizes.h2};
    margin-bottom: ${theme.spacing.md};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .testimonials-header p {
    font-family: ${theme.typography.fontFamily.mono};
    color: ${theme.colors.brushedSteel};
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: ${theme.spacing.lg};
  }

  .testimonial-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: ${theme.borders.weight} solid rgba(255, 255, 255, 0.1);
    padding: ${theme.spacing.lg};
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .testimonial-card:hover {
    border-color: ${theme.colors.cobaltBlue};
    background-color: rgba(0, 71, 171, 0.05);
  }

  .rating-display {
    display: flex;
    gap: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.md};
  }

  .star {
    font-size: 1.25rem;
    color: ${theme.colors.cobaltBlue};
  }

  .quote-text {
    font-size: ${theme.typography.sizes.body};
    font-style: italic;
    margin-bottom: ${theme.spacing.md};
    line-height: ${theme.typography.lineHeight.relaxed};
  }

  .endorser-info {
    border-top: ${theme.borders.weight} solid rgba(255, 255, 255, 0.1);
    padding-top: ${theme.spacing.md};
  }

  .endorser-name {
    font-weight: ${theme.typography.weights.bold};
    font-size: ${theme.typography.sizes.body};
    margin-bottom: ${theme.spacing.xs};
  }

  .endorser-title {
    font-size: ${theme.typography.sizes.small};
    color: ${theme.colors.cobaltBlue};
    font-family: ${theme.typography.fontFamily.mono};
    margin-bottom: ${theme.spacing.xs};
  }

  .verification-badge {
    display: inline-block;
    background-color: ${theme.colors.successGreen};
    color: ${theme.colors.sterileWhite};
    padding: 2px ${theme.spacing.xs};
    font-size: ${theme.typography.sizes.micro};
    border-radius: ${theme.borders.radius};
    font-weight: ${theme.typography.weights.bold};
    margin-right: ${theme.spacing.xs};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .transaction-hash {
    font-family: ${theme.typography.fontFamily.mono};
    font-size: ${theme.typography.sizes.micro};
    color: ${theme.colors.brushedSteel};
    margin-top: ${theme.spacing.xs};
    word-break: break-all;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    .testimonials-section {
      padding: ${theme.spacing.xl} ${theme.spacing.md};
    }

    .testimonials-grid {
      grid-template-columns: 1fr;
      gap: ${theme.spacing.md};
    }

    .testimonials-header h2 {
      font-size: ${theme.typography.sizes.h3};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    .testimonials-section {
      padding: ${theme.spacing.lg} ${theme.spacing.sm};
    }

    .testimonial-card {
      padding: ${theme.spacing.md};
    }

    .quote-text {
      font-size: ${theme.typography.sizes.small};
    }

    .endorser-name {
      font-size: ${theme.typography.sizes.small};
    }
  }
`;

interface Testimonial {
  id: string;
  endorserName: string;
  title: string;
  organization: string;
  quote: string;
  rating: number;
  verificationDate: string;
  transactionHash: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    endorserName: 'John Martinez',
    title: 'Homeowner',
    organization: 'Chicago, IL',
    quote:
      'Had a major leak in my kitchen. They came same day, fixed it right, and the price was fair. Will definitely call them again.',
    rating: 5,
    verificationDate: '2024-04-15',
    transactionHash: '0xA7F3...8C2D',
  },
  {
    id: 'test-002',
    endorserName: 'Sarah Johnson',
    title: 'Property Manager',
    organization: 'Downtown Apartments',
    quote:
      'Professional, reliable, and they show up on time. They\'ve handled multiple repairs across our building and never let us down.',
    rating: 5,
    verificationDate: '2024-03-22',
    transactionHash: '0xB4E9...5F1A',
  },
  {
    id: 'test-003',
    endorserName: 'Mike Davis',
    title: 'Small Business Owner',
    organization: 'Davis Auto Repair',
    quote:
      'Needed emergency plumbing work done fast. They arrived quickly and got everything fixed with minimal disruption to our business.',
    rating: 5,
    verificationDate: '2024-04-01',
    transactionHash: '0xC1D7...4E3B',
  },
  {
    id: 'test-004',
    endorserName: 'Lisa Chen',
    title: 'Homeowner',
    organization: 'Oak Park, IL',
    quote:
      'Great crew. They explained what needed to be done before they started. No surprises, no upsells. Very honest and professional.',
    rating: 5,
    verificationDate: '2024-02-18',
    transactionHash: '0xD6A2...9K4L',
  },
];

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <span key={i} className="star">
        ★
      </span>
    ));
  };

  return (
    <>
      <style>{styles}</style>
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-header">
          <h2>What Our Customers Say</h2>
          <p>Real feedback from people just like you</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating-display">
                {renderStars(testimonial.rating)}
              </div>

              <p className="quote-text">"{testimonial.quote}"</p>

              <div className="endorser-info">
                <div className="endorser-name">{testimonial.endorserName}</div>
                <div className="endorser-title">
                  <span className="verification-badge">✓ VERIFIED</span>
                  {testimonial.title}
                </div>
                <div className="endorser-title">{testimonial.organization}</div>
                <div className="transaction-hash">
                  Transaction Hash: {testimonial.transactionHash} |{' '}
                  {testimonial.verificationDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;

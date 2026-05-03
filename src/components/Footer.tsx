import React from 'react';
import { theme } from '../styles/theme';

const styles = `
  .footer {
    background-color: ${theme.colors.obsidianGray};
    color: ${theme.colors.sterileWhite};
    padding: ${theme.spacing.xxl} ${theme.spacing.lg};
    margin-top: ${theme.spacing.xxl};
  }

  .footer-content {
    max-width: 1440px;
    margin: 0 auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.xxl};
  }

  .footer-section h3 {
    font-size: ${theme.typography.sizes.h4};
    margin-bottom: ${theme.spacing.md};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .footer-section p,
  .footer-section a,
  .footer-section li {
    font-size: ${theme.typography.sizes.body};
    line-height: ${theme.typography.lineHeight.relaxed};
    color: ${theme.colors.brushedSteel};
  }

  .footer-section a {
    color: ${theme.colors.cobaltBlue};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-section a:hover {
    color: ${theme.colors.sterileWhite};
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
  }

  .footer-section li {
    margin-bottom: ${theme.spacing.sm};
  }

  .compliance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacing.lg};
    background-color: rgba(255, 255, 255, 0.05);
    border: ${theme.borders.weight} solid rgba(255, 255, 255, 0.1);
    padding: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.xl};
    border-radius: ${theme.borders.radius};
  }

  .compliance-item {
    border-right: ${theme.borders.weight} solid rgba(255, 255, 255, 0.1);
    padding-right: ${theme.spacing.lg};
  }

  .compliance-item:last-child {
    border-right: none;
  }

  .compliance-label {
    font-size: ${theme.typography.sizes.small};
    color: ${theme.colors.cobaltBlue};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: ${theme.typography.weights.bold};
    margin-bottom: ${theme.spacing.xs};
  }

  .compliance-value {
    font-size: ${theme.typography.sizes.body};
    font-family: ${theme.typography.fontFamily.mono};
  }

  .footer-divider {
    border-top: ${theme.borders.weight} solid rgba(255, 255, 255, 0.1);
    margin: ${theme.spacing.xl} 0;
  }

  .footer-bottom {
    text-align: center;
    padding-top: ${theme.spacing.lg};
    border-top: ${theme.borders.weight} solid rgba(255, 255, 255, 0.1);
  }

  .footer-bottom p {
    font-size: ${theme.typography.sizes.small};
    color: ${theme.colors.brushedSteel};
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.md};
    flex-wrap: wrap;
  }

  .footer-links a {
    font-size: ${theme.typography.sizes.small};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    .footer {
      padding: ${theme.spacing.xl} ${theme.spacing.md};
    }

    .footer-grid {
      gap: ${theme.spacing.lg};
      margin-bottom: ${theme.spacing.lg};
    }

    .compliance-grid {
      grid-template-columns: 1fr;
      gap: ${theme.spacing.md};
    }

    .compliance-item {
      border-right: none;
      border-bottom: ${theme.borders.weight} solid rgba(255, 255, 255, 0.1);
      padding-right: 0;
      padding-bottom: ${theme.spacing.md};
    }

    .compliance-item:last-child {
      border-bottom: none;
    }

    .footer-links {
      gap: ${theme.spacing.md};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    .footer {
      padding: ${theme.spacing.lg} ${theme.spacing.sm};
      margin-top: ${theme.spacing.lg};
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: ${theme.spacing.md};
    }

    .footer-section h3 {
      font-size: ${theme.typography.sizes.h4};
    }

    .footer-section p,
    .footer-section a,
    .footer-section li {
      font-size: ${theme.typography.sizes.small};
    }

    .compliance-grid {
      padding: ${theme.spacing.md};
    }

    .footer-links {
      flex-direction: column;
      gap: ${theme.spacing.sm};
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <footer className="footer">
        <div className="footer-content">
          {/* Main Footer Sections */}
          <div className="footer-grid">
            {/* Company Information */}
            <div className="footer-section">
              <h3>Enterprise Plumbing Solutions</h3>
              <p>Tier-1 Industrial & Residential Plumbing Infrastructure Provider</p>
              <p>
                <strong>Headquarters:</strong> Multi-State Operations Hub
              </p>
              <p>
                <strong>Emergency Dispatch:</strong> Available 24/7/365
              </p>
            </div>

            {/* Services Directory */}
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#industrial">Industrial Solutions</a></li>
                <li><a href="#residential">Residential Infrastructure</a></li>
                <li><a href="#maintenance">Preventative Maintenance</a></li>
                <li><a href="#emergency">Emergency Response</a></li>
                <li><a href="#diagnostics">System Diagnostics</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="#forum">Knowledge Base</a></li>
                <li><a href="#gallery">Project Gallery</a></li>
                <li><a href="#testimonials">Verified Testimonials</a></li>
                <li><a href="#">Technical Documentation</a></li>
                <li><a href="#">RFP Template</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="footer-section">
              <h3>Contact Information</h3>
              <p>
                <strong>Phone:</strong> +1-XXX-XXX-XXXX
              </p>
              <p>
                <strong>Email:</strong> dispatch@enterprise-plumbing.com
              </p>
              <p>
                <strong>Portal Login:</strong> client.enterprise-plumbing.com
              </p>
              <p>
                <strong>Emergency Hotline:</strong> 1-XXX-EMERGENCY
              </p>
            </div>
          </div>

          {/* Compliance & Legal Information */}
          <div className="compliance-grid">
            <div className="compliance-item">
              <div className="compliance-label">⚑ State Licensing</div>
              <div className="compliance-value">
                Licensed in 45+ States
                <br />
                License Verification Available
              </div>
            </div>

            <div className="compliance-item">
              <div className="compliance-label">✉ Bonding Status</div>
              <div className="compliance-value">
                Fully Bonded & Insured
                <br />
                $5M Coverage Limit
              </div>
            </div>

            <div className="compliance-item">
              <div className="compliance-label">Insurance Liability</div>
              <div className="compliance-value">
                General Liability: $2M
                <br />
                Professional: $1M
              </div>
            </div>

            <div className="compliance-item">
              <div className="compliance-label">EPA Certifications</div>
              <div className="compliance-value">
                Water Efficiency Compliant
                <br />
                Environmental Standards: ISO 14001
              </div>
            </div>

            <div className="compliance-item">
              <div className="compliance-label">Industry Standards</div>
              <div className="compliance-value">
                ISO 9001 Certified
                <br />
                OSHA Compliance: 100%
              </div>
            </div>

            <div className="compliance-item">
              <div className="compliance-label">Code Compliance</div>
              <div className="compliance-value">
                IPC | IRC | ASME | NFPA 99
                <br />
                State-Specific Requirements
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Compliance Documentation</a>
              <a href="#">Accessibility Statement</a>
              <a href="#">Sitemap</a>
            </div>
            <p>
              © {new Date().getFullYear()} Enterprise Plumbing Solutions. All rights reserved.
            </p>
            <p>
              Enterprise Plumbing Solutions is committed to the highest standards of
              professional service delivery and regulatory compliance.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

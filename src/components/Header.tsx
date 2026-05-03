import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../styles/theme';

const styles = `
  .header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: ${theme.colors.sterileWhite};
    border-bottom: 3px solid ${theme.colors.cobaltBlue};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    animation: slideInFromTop 0.6s ease-out;
  }

  .header-top {
    background: linear-gradient(90deg, ${theme.colors.obsidianGray} 0%, rgba(26, 26, 27, 0.95) 100%);
    color: ${theme.colors.sterileWhite};
    padding: ${theme.spacing.sm} 0;
    font-size: ${theme.typography.sizes.small};
    font-family: ${theme.typography.fontFamily.mono};
    border-bottom: 1px solid rgba(0, 71, 171, 0.2);
  }

  .header-top-content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.lg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing.lg};
  }

  .header-top-right {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.lg};
  }

  .contact-info {
    display: flex;
    gap: ${theme.spacing.xl};
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};
  }

  .emergency-id {
    color: ${theme.colors.warningRed};
    font-weight: ${theme.typography.weights.bold};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .emergency-call {
    background-color: ${theme.colors.warningRed};
    color: ${theme.colors.sterileWhite};
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border-radius: ${theme.borders.radius};
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    font-size: ${theme.typography.sizes.body};
    font-family: ${theme.typography.fontFamily.mono};
    font-weight: ${theme.typography.weights.bold};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .emergency-call:hover {
    background-color: #B71C1C;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(211, 47, 47, 0.4);
  }

  .call-number {
    font-size: ${theme.typography.sizes.h4};
    font-weight: ${theme.typography.weights.bold};
    margin-right: ${theme.spacing.md};
  }

  .header-main {
    max-width: 1440px;
    margin: 0 auto;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: ${theme.typography.sizes.h2};
    font-weight: ${theme.typography.weights.bold};
    color: ${theme.colors.cobaltBlue};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    gap: ${theme.spacing.xl};
  }

  .nav-link {
    font-size: ${theme.typography.sizes.body};
    font-weight: 700;
    color: ${theme.colors.obsidianGray};
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: ${theme.spacing.xs} 0;
    border-bottom: 2px solid transparent;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    animation: slideAndFade 0.6s ease-out backwards;
  }

  .nav-link:nth-child(1) { animation-delay: 0.1s; }
  .nav-link:nth-child(2) { animation-delay: 0.15s; }
  .nav-link:nth-child(3) { animation-delay: 0.2s; }
  .nav-link:nth-child(4) { animation-delay: 0.25s; }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.cobaltBlue};
    transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .nav-link:hover {
    color: ${theme.colors.cobaltBlue};
    transform: translateY(-2px);
  }

  .nav-link.active {
    color: ${theme.colors.cobaltBlue};
    border-bottom-color: ${theme.colors.cobaltBlue};
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 0.35rem;
  }

  .hamburger-line {
    width: 28px;
    height: 2px;
    background-color: ${theme.colors.obsidianGray};
    transition: all 0.3s ease;
  }

  .hamburger.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .hamburger.active .hamburger-line:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    .header-top-content {
      flex-direction: column;
      gap: ${theme.spacing.sm};
      padding: 0 ${theme.spacing.md};
    }

    .contact-info {
      gap: ${theme.spacing.md};
      font-size: ${theme.typography.sizes.micro};
    }

    .header-main {
      padding: ${theme.spacing.md};
    }

    .nav-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: ${theme.colors.sterileWhite};
      border-bottom: ${theme.borders.weight} solid ${theme.colors.borderGray};
      gap: 0;
    }

    .nav-menu.active {
      display: flex;
    }

    .nav-link {
      padding: ${theme.spacing.md};
      border-bottom: ${theme.borders.weight} solid ${theme.colors.borderGray};
    }

    .hamburger {
      display: flex;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    .header-top {
      display: none;
    }

    .header-main {
      padding: ${theme.spacing.sm};
    }

    .logo {
      font-size: ${theme.typography.sizes.h3};
    }

    .contact-info {
      flex-direction: column;
    }
  }
`;

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <style>{styles}</style>
      <header className="header">
        {/* Tier 1: Emergency Call Header */}
        <div className="header-top">
          <div className="header-top-content">
            <div className="contact-info">
              <div className="contact-item">
                <span>▬ Licensed & Insured | 24/7 Emergency Response</span>
              </div>
            </div>
            <div className="header-top-right">
              <div className="call-number">📞 (555) 234-5678</div>
              <button 
                className="emergency-call" 
                onClick={() => window.location.href = 'tel:5552345678'}
              >
                CALL NOW
              </button>
            </div>
          </div>
        </div>

        {/* Tier 2: Navigation Matrix */}
        <div className="header-main">
          <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div className="logo">Enterprise Plumbing</div>
          </Link>

          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => handleNavClick()}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  ▸ {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;

import { useState } from 'react'
import { COLORS, SPACING } from '../utils/constants'

const theme = {
  colors: COLORS,
  spacing: SPACING,
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    issue: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        address: '',
        issue: '',
      })
      setSubmitted(false)
    }, 4000)
  }

  return (
    <div style={{ animation: 'fadeIn 0.6s ease-in-out' }}>
      <style>{`
        .contact-hero {
          background: linear-gradient(135deg, ${theme.colors.obsidianGray} 0%, ${theme.colors.brushedSteel} 100%);
          color: ${theme.colors.sterileWhite};
          padding: 4rem 2rem;
          text-align: center;
          animation: slideDown 0.8s ease-out;
        }

        .contact-hero h1 {
          font-size: 2.5rem;
          margin-bottom: ${theme.spacing.md};
          letter-spacing: 0.1em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .big-phone {
          font-size: 4rem;
          font-weight: 900;
          color: ${theme.colors.warningRed};
          margin: 2rem 0;
          font-family: 'Courier New', monospace;
        }

        .cta-button {
          background: ${theme.colors.warningRed};
          color: white;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          border: none;
          cursor: pointer;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #B71C1C;
          transform: scale(1.05);
        }

        .contact-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .contact-info h2 {
          font-size: 1.8rem;
          color: ${theme.colors.obsidianGray};
          margin-bottom: ${theme.spacing.lg};
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-info p {
          color: ${theme.colors.brushedSteel};
          line-height: 1.8;
          margin-bottom: ${theme.spacing.lg};
          font-size: 1rem;
        }

        .contact-item {
          margin-bottom: 1.5rem;
        }

        .contact-label {
          color: ${theme.colors.cobaltBlue};
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .contact-value {
          color: ${theme.colors.obsidianGray};
          font-size: 1.1rem;
          font-weight: 500;
          font-family: 'Roboto Mono', monospace;
        }

        .contact-form h3 {
          font-size: 1.3rem;
          color: ${theme.colors.obsidianGray};
          margin-bottom: ${theme.spacing.lg};
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-group {
          margin-bottom: ${theme.spacing.lg};
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .form-group:nth-child(1) { animation-delay: 0.3s; }
        .form-group:nth-child(2) { animation-delay: 0.35s; }
        .form-group:nth-child(3) { animation-delay: 0.4s; }
        .form-group:nth-child(4) { animation-delay: 0.45s; }

        .form-label {
          display: block;
          color: ${theme.colors.obsidianGray};
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.75rem;
          background: ${theme.colors.sterileWhite};
          border: 1px solid rgba(0, 71, 171, 0.2);
          color: ${theme.colors.obsidianGray};
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: ${theme.colors.cobaltBlue};
          box-shadow: 0 0 0 3px rgba(0, 71, 171, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
          font-size: 0.9rem;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: ${theme.colors.cobaltBlue};
          color: ${theme.colors.sterileWhite};
          border: none;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover:not(:disabled) {
          background: #003580;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 71, 171, 0.3);
        }

        .success-message {
          background: rgba(56, 142, 60, 0.1);
          border: 1px solid ${theme.colors.successGreen};
          color: ${theme.colors.successGreen};
          padding: 1rem;
          text-align: center;
          font-weight: 600;
          animation: slideDown 0.5s ease-out;
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
          .big-phone {
            font-size: 2.5rem;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 1rem;
          }
        }
      `}</style>

      <div className="contact-hero">
        <h1>Need a Plumber?</h1>
        <div className="big-phone">(555) 234-5678</div>
        <button 
          className="cta-button"
          onClick={() => window.location.href = 'tel:5552345678'}
        >
          Call Now
        </button>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          Available 24/7 for emergencies
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>How It Works</h2>
          <p>
            1. Call us now or fill out the form<br/><br/>
            2. We'll send a plumber to your location<br/><br/>
            3. We'll give you a price before we start<br/><br/>
            4. We fix the problem and you pay<br/><br/>
            5. Done! No hidden fees ever.
          </p>

          <div className="contact-item" style={{ marginTop: '2rem' }}>
            <div className="contact-label">Service Areas</div>
            <div className="contact-value">Chicago & Suburbs</div>
          </div>

          <div className="contact-item">
            <div className="contact-label">Emergency Response</div>
            <div className="contact-value">Usually within 45 minutes</div>
          </div>

          <div className="contact-item">
            <div className="contact-label">We Accept</div>
            <div className="contact-value">Cash, Check, Cards, Financing</div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form">
            <h3>Schedule Service</h3>

            {submitted && (
              <div className="success-message">
                ✓ We got your info. A plumber will call you soon!
              </div>
            )}

            {!submitted && (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-input"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, Chicago, IL"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">What's the problem?</label>
                  <textarea
                    name="issue"
                    className="form-textarea"
                    value={formData.issue}
                    onChange={handleChange}
                    placeholder="Leaky pipe? Clogged drain? Water heater broken?"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Schedule Service
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

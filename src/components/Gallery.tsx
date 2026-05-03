import React, { useState } from 'react';
import { theme } from '../styles/theme';

const styles = `
  .gallery-section {
    max-width: 1440px;
    margin: 0 auto;
    padding: ${theme.spacing.xxl} ${theme.spacing.lg};
    background-color: ${theme.colors.sterileWhite};
  }

  .gallery-header {
    text-align: center;
    margin-bottom: ${theme.spacing.xxl};
  }

  .gallery-header h2 {
    font-size: ${theme.typography.sizes.h2};
    margin-bottom: ${theme.spacing.md};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .filter-buttons {
    display: flex;
    justify-content: center;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.xl};
    flex-wrap: wrap;
  }

  .filter-btn {
    background-color: ${theme.colors.sterileWhite};
    color: ${theme.colors.obsidianGray};
    border: 2px solid ${theme.colors.borderGray};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.typography.sizes.body};
    font-weight: ${theme.typography.weights.semibold};
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s ease;
  }

  .filter-btn.active,
  .filter-btn:hover {
    background-color: ${theme.colors.cobaltBlue};
    color: ${theme.colors.sterileWhite};
    border-color: ${theme.colors.cobaltBlue};
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: ${theme.spacing.lg};
  }

  .gallery-item {
    background-color: ${theme.colors.sterileWhite};
    border: ${theme.borders.weight} solid ${theme.colors.borderGray};
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: ${theme.shadows.minimal};
  }

  .gallery-item:hover {
    box-shadow: ${theme.shadows.card};
    border-color: ${theme.colors.cobaltBlue};
    transform: translateY(-4px);
  }

  .gallery-image-container {
    position: relative;
    width: 100%;
    height: 280px;
    background: linear-gradient(135deg, ${theme.colors.obsidianGray}, ${theme.colors.brushedSteel});
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.sterileWhite};
    font-size: 4rem;
    overflow: hidden;
  }

  .gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }

  .overlay-text {
    color: ${theme.colors.sterileWhite};
    font-size: ${theme.typography.sizes.h4};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .gallery-metadata {
    padding: ${theme.spacing.lg};
    background-color: ${theme.colors.sterileWhite};
  }

  .project-id {
    font-family: ${theme.typography.fontFamily.mono};
    font-size: ${theme.typography.sizes.small};
    color: ${theme.colors.cobaltBlue};
    font-weight: ${theme.typography.weights.bold};
    margin-bottom: ${theme.spacing.sm};
    text-transform: uppercase;
  }

  .system-type {
    font-size: ${theme.typography.sizes.h4};
    margin-bottom: ${theme.spacing.sm};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .specs-row {
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing.xs} 0;
    border-bottom: ${theme.borders.weight} solid ${theme.colors.borderGray};
    font-size: ${theme.typography.sizes.small};
    font-family: ${theme.typography.fontFamily.mono};
  }

  .specs-row:last-child {
    border-bottom: none;
  }

  .spec-label {
    color: ${theme.colors.brushedSteel};
    font-weight: ${theme.typography.weights.semibold};
  }

  .spec-value {
    color: ${theme.colors.obsidianGray};
    font-weight: ${theme.typography.weights.bold};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    .gallery-section {
      padding: ${theme.spacing.xl} ${theme.spacing.md};
    }

    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: ${theme.spacing.md};
    }

    .filter-buttons {
      gap: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.lg};
    }

    .gallery-image-container {
      height: 240px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    .gallery-section {
      padding: ${theme.spacing.lg} ${theme.spacing.sm};
    }

    .gallery-grid {
      grid-template-columns: 1fr;
    }

    .filter-btn {
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      font-size: ${theme.typography.sizes.small};
    }

    .gallery-image-container {
      height: 200px;
      font-size: 2.5rem;
    }

    .gallery-metadata {
      padding: ${theme.spacing.md};
    }
  }
`;

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  projectId: string;
  systemType: string;
  psiRating: string;
  complianceStandard: string;
  icon: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 'proj-001',
    title: 'Industrial Manifold Assembly',
    category: 'industrial',
    projectId: 'EP-2024-IND-001',
    systemType: 'High-Pressure Manifold',
    psiRating: '2500 PSI Max',
    complianceStandard: 'ASME B16.1',
    icon: '⚙',
  },
  {
    id: 'proj-002',
    title: 'Residential Water Main Upgrade',
    category: 'residential',
    projectId: 'EP-2024-RES-042',
    systemType: 'Potable Water Distribution',
    psiRating: '80 PSI Operating',
    complianceStandard: 'IPC 2021',
    icon: '💧',
  },
  {
    id: 'proj-003',
    title: 'Commercial HVAC Integration',
    category: 'industrial',
    projectId: 'EP-2024-IND-087',
    systemType: 'Chilled Water Loop',
    psiRating: '150 PSI Design',
    complianceStandard: 'ASHRAE 90.1',
    icon: '❄️',
  },
  {
    id: 'proj-004',
    title: 'Emergency Burst Line Repair',
    category: 'emergency',
    projectId: 'EP-2024-EMG-159',
    systemType: 'Copper PEX Replacement',
    psiRating: '100 PSI Rated',
    complianceStandard: 'NSF/ANSI 61',
    icon: '⟲',
  },
  {
    id: 'proj-005',
    title: 'Preventative Scale Mitigation',
    category: 'maintenance',
    projectId: 'EP-2024-MNT-203',
    systemType: 'Descaling Treatment Protocol',
    psiRating: 'N/A (Treatment)',
    complianceStandard: 'EPA WQA',
    icon: '🧪',
  },
  {
    id: 'proj-006',
    title: 'Medical Facility Gas System',
    category: 'industrial',
    projectId: 'EP-2024-IND-112',
    systemType: 'Medical Gas Vacuum',
    psiRating: '50 PSI Operating',
    complianceStandard: 'NFPA 99 / ASSE 6000',
    icon: '🏥',
  },
];

interface GalleryProps {
  onImageSelect?: (image: GalleryImage) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['industrial', 'residential', 'emergency', 'maintenance'];

  const filteredImages =
    selectedCategory === null
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <style>{styles}</style>
      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <h2>⊞ Technical Showcase</h2>
          <p>
            Project Documentation: Before/After Architectural Overlays & System
            Specifications
          </p>
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${selectedCategory === null ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => onImageSelect?.(image)}
            >
              <div className="gallery-image-container">
                {image.icon}
                <div className="gallery-overlay">
                  <span className="overlay-text">View Details</span>
                </div>
              </div>
              <div className="gallery-metadata">
                <div className="project-id">{image.projectId}</div>
                <h3 className="system-type">{image.systemType}</h3>

                <div className="specs-row">
                  <span className="spec-label">PSI Rating:</span>
                  <span className="spec-value">{image.psiRating}</span>
                </div>

                <div className="specs-row">
                  <span className="spec-label">Compliance:</span>
                  <span className="spec-value">{image.complianceStandard}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;

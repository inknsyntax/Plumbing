# Enterprise Plumbing Solutions - Website Architecture

## Overview

A **Tier-1 industrial and residential plumbing infrastructure** website built with React + TypeScript + Vite. This project implements extreme professionalism, structural authority, and technical precision with ISO-standardized design language and Schema.org SEO markup.

---

## I. Project Structure

```
src/
├── components/          # React UI Components
│   ├── Header.tsx       # Dual-tier header with contact protocols & navigation matrix
│   ├── Hero.tsx         # Hero section with RFP & Emergency Dispatch CTAs
│   ├── Services.tsx     # 6-service operational matrix with specifications
│   ├── Gallery.tsx      # Technical showcase with before/after metadata
│   ├── Testimonials.tsx # Verified professional endorsements with badges
│   ├── Forum.tsx        # Knowledge base with user tier system
│   └── Footer.tsx       # Legal, compliance, and comprehensive sitemap
├── styles/
│   ├── theme.ts         # Industrial color palette & typography system
│   └── globals.ts       # Global CSS reset & media queries
├── utils/
│   └── schema.ts        # Schema.org structured data generators
├── App.tsx              # Root application with Schema.org injection
├── App.css              # App-level styles
├── index.css            # Global variables & base styles
└── main.tsx             # React DOM entry point
```

---

## II. Design System

### Color Palette (ISO-Standardized)

|       Color       |  Hex-Code |                             Usage                           |
|-------------------|-----------|-------------------------------------------------------------|
| **Obsidian Gray** | `#1A1A1B` | Primary text, headers, industrial authority                 |
| **Sterile White** | `#F5F5F7` | Background, clean space                                     |
| **Cobalt Blue** | `#0047AB`   | Links, accents, action buttons (hydraulic systems metaphor) |
| **Brushed Steel** | `#A9A9A9` | Secondary text, borders, specs                              |
| **Warning Red** | `#D32F2F` | Critical alerts, emergency indicators  |
| **Success Green** | `#388E3C` | System operational, verification badges |

### Typography

- **Primary Font**: Inter, Roboto, Helvetica Neue (strict kerning)
- **Monospace Font**: Roboto Mono, Courier New
- **Sizes**: H1 (2.5rem), H2 (2rem), H3 (1.5rem), Body (1rem), Small (0.875rem)
- **Font Weights**: Light (300), Regular (400), Semibold (600), Bold (700)

---

## III. Installation & Development

### Prerequisites
- Node.js 18+
- npm 9+

### Setup
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

### Development Server
Starts at `http://localhost:5173` with hot module replacement (HMR).

---

## IV. Component Architecture

### Header [H-01]
**Dual-Tier Header Structure**
- **Tier 1** (Top Bar - Dark Gray): Global HQ Location | 24/7 Emergency Dispatch ID | Secure Client Portal Login
- **Tier 2** (Navigation Bar): Logo | Navigation Matrix | Mobile Hamburger Menu

### Services
6-card grid with ISO specifications for:
- Industrial Solutions, Residential Infrastructure, Preventative Maintenance
- Emergency Response, System Diagnostics, Technical Consultation

### Gallery [G-08]
Technical showcase with metadata format:
```
[Project ID | System Type | PSI Rating | Compliance Standard]
```

### Testimonials [T-12 / R-14]
Verified professional endorsements with ✓ VERIFIED badge and transaction hashes.

### Forum [F-09]
Knowledge base with moderated threads and user tiers:
- **Master Plumber** | **Journeyman** | **Apprentice**

### Footer [F-02]
Comprehensive compliance grid with state licensing, bonding, insurance, and EPA certifications.

---

## V. Schema.org Implementation

Injects three primary Schema.org structured data formats for maximum SEO authority:

1. **LocalBusiness** - Location, contact, service area
2. **ProfessionalService** - Service definitions, credentials, operating hours
3. **AggregateRating** - Social proof (4.9 rating, 187 reviews)

---

## VI. Responsive Design

### Breakpoints
- **Mobile**: 320px | **Tablet**: 768px | **Desktop**: 1024px | **Wide**: 1440px

Mobile-first approach with hamburger navigation, stacked layouts, and optimized typography.

---

## VII. Build Output

```
dist/
├── index.html                  # Entry point
├── assets/
│   ├── index-[hash].js         # Bundled application (242 KB, ~71 KB gzip)
│   └── index-[hash].css        # Compiled styles (2.06 KB, ~0.9 KB gzip)
```

---

## VIII. Compliance & Standards

### Industry Standards
- **Plumbing**: IPC 2021, IRC, State-specific
- **Mechanical**: ASME B16.1, ISO 1219-1
- **Medical Gas**: NFPA 99, ASSE 6000
- **Environmental**: EPA WQA, ISO 14001
- **Quality**: ISO 9001, OSHA 100%

### Accessibility
- Semantic HTML5, ARIA labels, keyboard navigation
- High contrast ratios, mobile-optimized touch targets

---

## IX. Development Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview built site locally
npm run type-check # TypeScript validation
```

---

## X. Support & Contact

- **Email**: dispatch@enterprise-plumbing.com
- **Emergency Hotline**: 1-XXX-EMERGENCY
- **Client Portal**: client.enterprise-plumbing.com

---

**Project Status**: ✓ Production-Ready  
**Version**: 1.0.0  
**Last Updated**: May 3, 2026
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

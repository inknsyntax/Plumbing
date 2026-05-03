# Information Architecture Diagram

## Site Structure Visualization

```
ENTERPRISE PLUMBING SOLUTIONS
│
├── HEADER [H-01]
│   ├── Tier 1: Global HQ | Emergency Dispatch | Secure Portal
│   └── Tier 2: Logo | Navigation | Mobile Menu
│
├── HERO SECTION
│   ├── Primary CTA: REQUEST FOR PROPOSAL
│   └── Secondary CTA: EMERGENCY DISPATCH
│
├── SERVICES [Service Matrix]
│   ├── Industrial Solutions (2500+ PSI, ASME)
│   ├── Residential Infrastructure (IPC 2021)
│   ├── Preventative Maintenance (15-30% longevity extension)
│   ├── Emergency Response (24/7, <45 min)
│   ├── System Diagnostics (Video inspection, Flow analysis)
│   └── Technical Consultation (Licensed engineers)
│
├── GALLERY [G-08]
│   ├── Filter: Industrial | Residential | Emergency | Maintenance
│   ├── Project ID: EP-2024-IND-001
│   ├── System Type: High-Pressure Manifold
│   ├── PSI Rating: 2500 PSI Max
│   └── Compliance: ASME B16.1
│
├── TESTIMONIALS [T-12 / R-14]
│   ├── Master Plumber Endorsements
│   ├── Property Manager Verification
│   ├── Plant Engineer References
│   ├── Rating: 4.9/5 (187 reviews)
│   └── Transaction Hash: 0xA7F3...8C2D
│
├── FORUM [F-09]
│   ├── User Tiers:
│   │   ├── Master Plumber (Blue)
│   │   ├── Journeyman (Gray)
│   │   └── Apprentice (Light Gray)
│   ├── Categories:
│   │   ├── Industrial Design
│   │   ├── Code Compliance
│   │   ├── Materials
│   │   ├── Emergency Response
│   │   └── Maintenance
│   └── Moderated Threads
│
└── FOOTER [F-02]
    ├── Company Information
    ├── Service Directory
    ├── Resource Links
    ├── Contact Information
    └── COMPLIANCE GRID
        ├── State Licensing (45+ states)
        ├── Bonding Status ($5M coverage)
        ├── Insurance Liability ($2M general, $1M professional)
        ├── EPA Certifications (ISO 14001)
        ├── Industry Standards (ISO 9001)
        └── Code Compliance (IPC, IRC, ASME, NFPA 99)
```

---

## Component Hierarchy

```
App
├── Header
│   ├── TopBar
│   │   ├── ContactInfo (HQ, Emergency ID)
│   │   └── PortalLoginButton
│   └── Navigation
│       ├── Logo
│       ├── NavMenu
│       │   ├── Industrial Solutions
│       │   ├── Residential Infrastructure
│       │   ├── Preventative Maintenance
│       │   ├── Emergency Response
│       │   └── Knowledge Base
│       └── HamburgerMenu (Mobile)
├── Hero
│   ├── Headline (Hydraulic Integrity Infrastructure)
│   ├── Tagline (Mission-Critical Services)
│   └── CTAButtons
│       ├── RequestProposal
│       └── EmergencyDispatch
├── Services
│   └── ServiceGrid
│       ├── ServiceCard (x6)
│       ├── Icon
│       ├── Title
│       ├── Description
│       └── SpecsList
├── Gallery
│   ├── FilterButtons
│   └── GalleryGrid
│       └── GalleryItem (x6+)
│           ├── ImageContainer
│           └── Metadata
│               ├── ProjectID
│               ├── SystemType
│               ├── PSIRating
│               └── ComplianceStandard
├── Testimonials
│   └── TestimonialGrid
│       └── TestimonialCard (x4)
│           ├── Rating (Stars)
│           ├── Quote
│           └── EndorserInfo
│               ├── Name
│               ├── Title
│               ├── VerificationBadge
│               └── TransactionHash
├── Forum
│   ├── CategoryTabs
│   └── ThreadList
│       └── ThreadItem (x5+)
│           ├── ThreadTitle
│           ├── Preview
│           ├── AuthorInfo
│           │   ├── AuthorBadge (Tier)
│           │   └── LastActivity
│           └── ThreadStats
│               ├── ReplyCount
│               └── ViewCount
└── Footer
    ├── FooterGrid
    │   ├── CompanyInfo
    │   ├── ServiceDirectory
    │   ├── ResourceLinks
    │   └── ContactInfo
    ├── ComplianceGrid
    │   ├── StateLicensing
    │   ├── BondingStatus
    │   ├── InsuranceLiability
    │   ├── EPACertifications
    │   ├── IndustryStandards
    │   └── CodeCompliance
    └── FooterBottom
        ├── FooterLinks
        └── Copyright
```

---

## Data Flow Diagram

```
USER INTERACTION
│
├── Desktop Navigation
│   └── Click Nav Item → Scroll to Section
│
├── Mobile Navigation
│   └── Hamburger Toggle → Mobile Menu → Click Item → Scroll
│
├── Form Submissions
│   ├── RFP Request → Alert Handler → Integration Point
│   └── Emergency Dispatch → Alert Handler → Integration Point
│
├── Gallery Interaction
│   ├── Click Filter → Filtered View
│   └── Click Item → Expanded View (Future Enhancement)
│
├── Forum Interaction
│   ├── Click Category Tab → Filtered Threads
│   ├── Click Create Thread → Modal (Future)
│   └── Click Thread → Details View (Future)
│
└── Schema.org Injection
    ├── LocalBusiness Schema → Search Index
    ├── ProfessionalService Schema → Knowledge Graph
    └── AggregateRating Schema → Rich Snippets
```

---

## Responsive Breakpoint Strategy

```
MOBILE (320px - 767px)
├── Single-column layouts
├── Hamburger navigation
├── Stacked form inputs
├── Full-width cards
└── Touch-optimized spacing

TABLET (768px - 1023px)
├── 2-column grid layouts
├── Full navigation bar
├── Optimized card spacing
└── Medium font sizes

DESKTOP (1024px - 1439px)
├── 3-column grid layouts
├── Full-width navigation
├── Maximum spacing
└── Full typography scale

WIDE (1440px+)
├── Max-width container (1440px)
├── Balanced margins
├── Optimal line lengths
└── Professional spacing
```

---

## SEO & Schema Authority Stack

```
SCHEMA.ORG MARKUP HIERARCHY
│
├── LocalBusiness (Primary)
│   ├── Name, Address, Phone
│   ├── Area Served, Price Range
│   └── Founding Date, Social Links
│
├── ProfessionalService (Services)
│   ├── Service Types (6 categories)
│   ├── Credentials/Licenses
│   ├── Operating Hours (24/7)
│   └── Phone, Email
│
├── AggregateRating (Social Proof)
│   ├── Rating Value: 4.9
│   ├── Review Count: 187
│   └── Best/Worst Rating: 5/1
│
├── Review (Individual Testimonials)
│   ├── Author Name + Title
│   ├── Rating + Text
│   └── Publication Date
│
└── BreadcrumbList (Navigation - Future)
    ├── Home > Services > Industrial > Specific Service
    └── Structured breadcrumb navigation
```

---

## Design Language System

```
UI SYMBOLS (ISO Standards)
├── ⟲  Emergency Response
├── ⊞  Gallery/Documentation
├── ⚙  Services/Operations
├── ⚑  Compliance/Legal
└── ✉  Formal Correspondence

COLOR SYSTEM
├── Primary: Obsidian Gray (#1A1A1B)
├── Accent: Cobalt Blue (#0047AB)
├── Success: Success Green (#388E3C)
├── Alert: Warning Red (#D32F2F)
└── Neutral: Brushed Steel (#A9A9A9)

TYPOGRAPHY HIERARCHY
├── H1: 2.5rem (Headlines)
├── H2: 2rem (Section titles)
├── H3: 1.5rem (Subsections)
├── H4: 1.25rem (Card titles)
├── Body: 1rem (Content)
└── Small: 0.875rem (Metadata)

SPACING SYSTEM
├── XS: 8px (Micro spacing)
├── SM: 16px (Component padding)
├── MD: 24px (Section spacing)
├── LG: 32px (Large sections)
├── XL: 48px (Sections)
└── XXL: 64px (Page sections)
```

---

## Mobile vs Desktop Key Differences

| Feature | Desktop | Mobile |
|---------|---------|--------|
| **Navigation** | Full horizontal menu | Hamburger menu |
| **Header** | Two tiers visible | Condensed, collapse Tier 1 |
| **Services Grid** | 3 columns | 1 column |
| **Gallery Grid** | 3 columns | 1 column |
| **Forum Tabs** | Full width | Horizontal scroll/dropdown |
| **Font Sizes** | Full scale | 85-90% scale |
| **Touch Targets** | 44px min | 48px min |
| **Spacing** | Full system | 75% of system |

---

## Future Enhancement Roadmap

```
PHASE 1: CORE (Complete)
├── Static website deployment
├── Schema.org SEO markup
└── Responsive mobile design

PHASE 2: INTERACTIVITY
├── Dynamic testimonials from APIs
├── Forum post creation/moderation
├── Gallery image upload
└── Client portal login

PHASE 3: E-COMMERCE
├── Service booking system
├── Payment processing (Stripe)
├── Invoice generation
└── Project management dashboard

PHASE 4: ANALYTICS
├── Google Analytics integration
├── Conversion tracking
├── Service-level KPIs
└── Advanced reporting

PHASE 5: INTERNATIONALIZATION
├── Multi-language support
├── Regional compliance variations
├── Localized testimonials
└── International service offerings
```

---

**Diagram Version**: 1.0.0  
**Last Updated**: May 3, 2026  
**Tool**: Mermaid Diagram System

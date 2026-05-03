/**
 * Schema.org Structured Data Generator
 * Implements LocalBusiness, ProfessionalService, and Organization markup
 * for maximum SEO authority and search engine visibility
 */

export interface BusinessInfo {
  name: string;
  description: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  email: string;
  foundingDate: string;
  sameAs: string[];
  areaServed: string[];
  priceRange: string;
}

export const generateLocalBusinessSchema = (business: BusinessInfo) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': '#organization',
  name: business.name,
  description: business.description,
  image: 'images/badges/Logo.png',
  telephone: business.telephone,
  email: business.email,
  url: 'https://plumbing-enterprise.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.addressLocality,
    addressRegion: business.address.addressRegion,
    postalCode: business.address.postalCode,
    addressCountry: business.address.addressCountry,
  },
  foundingDate: business.foundingDate,
  sameAs: business.sameAs,
  areaServed: business.areaServed,
  priceRange: business.priceRange,
});

export const generateProfessionalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Enterprise Plumbing Solutions',
  description:
    'Tier-1 industrial and residential plumbing infrastructure provider',
  areaServed: {
    '@type': 'State',
    name: 'United States',
  },
  serviceType: [
    'Industrial Plumbing',
    'Residential Infrastructure',
    'Preventative Maintenance',
    'Emergency Response',
    'High-Pressure Systems',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'State Plumber License',
  },
  telephone: '+1-XXX-XXX-XXXX',
  email: 'dispatch@enterprise-plumbing.com',
  operatingHours: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
});

export const generateAggregateReviewSchema = (
  ratingValue: number,
  reviewCount: number
) => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  '@id': '#aggregate-review',
  ratingValue,
  reviewCount,
  bestRating: 5,
  worstRating: 1,
});

export const generateReviewSchema = (
  author: string,
  rating: number,
  datePublished: string,
  reviewBody: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: {
    '@type': 'Person',
    name: author,
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: rating,
    bestRating: 5,
    worstRating: 1,
  },
  datePublished,
  reviewBody,
  publisher: {
    '@type': 'Organization',
    name: 'Enterprise Plumbing Solutions',
    '@id': '#organization',
  },
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://plumbing-enterprise.com${item.url}`,
  })),
});


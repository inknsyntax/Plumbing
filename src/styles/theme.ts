// Enterprise Color Palette & Design System
export const theme = {
  colors: {
    // Primary Industrial Palette
    obsidianGray: '#1A1A1B',      // Obsidian/Industrial Graphite
    sterileWhite: '#F5F5F7',       // Sterile White
    cobaltBlue: '#0047AB',         // Cobalt/Hydraulic Blue
    brushedSteel: '#A9A9A9',       // Brushed Steel
    
    // Accents
    warningRed: '#D32F2F',         // Critical Alert
    successGreen: '#388E3C',       // System Operational
    systemGray: '#616161',         // Secondary Text
    borderGray: '#E0E0E0',         // Borders
  },
  
  typography: {
    // Sans-serif hierarchy with precision kerning
    fontFamily: {
      primary: '"Inter", "Roboto", "Helvetica Neue", sans-serif',
      mono: '"Roboto Mono", "Courier New", monospace',
    },
    sizes: {
      h1: '2.5rem',    // 40px
      h2: '2rem',      // 32px
      h3: '1.5rem',    // 24px
      h4: '1.25rem',   // 20px
      body: '1rem',    // 16px
      small: '0.875rem', // 14px
      micro: '0.75rem', // 12px
    },
    weights: {
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    xxl: '4rem',     // 64px
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },

  shadows: {
    minimal: '0 1px 3px rgba(0, 0, 0, 0.12)',
    subtle: '0 2px 6px rgba(0, 0, 0, 0.1)',
    card: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },

  borders: {
    radius: '2px',    // Minimal rounding for industrial aesthetic
    weight: '1px',
  },
} as const;

export type Theme = typeof theme;

// Centralized color constants for the application
export const COLORS = {
  obsidianGray: '#1A1A1B',
  sterileWhite: '#F5F5F7',
  cobaltBlue: '#0047AB',
  brushedSteel: '#A9A9A9',
  warningRed: '#D32F2F',
  successGreen: '#388E3C',
} as const

// Centralized spacing system
export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  xxl: '4rem',
} as const

// Common button styles
export const BUTTON_STYLES = {
  primary: {
    backgroundColor: COLORS.cobaltBlue,
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    transition: 'all 0.3s ease',
  } as const,
  danger: {
    backgroundColor: COLORS.warningRed,
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    transition: 'all 0.3s ease',
  } as const,
} as const

// Common form input styles
export const INPUT_STYLES = {
  base: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #e0e0e0',
    fontFamily: 'inherit',
    fontSize: '0.95rem',
    color: COLORS.obsidianGray,
    boxSizing: 'border-box' as const,
  } as const,
  focus: {
    outline: 'none',
    borderColor: COLORS.cobaltBlue,
    boxShadow: `0 0 0 3px rgba(0, 71, 171, 0.1)`,
  } as const,
} as const

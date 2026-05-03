import { theme } from './theme';

export const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.sizes.body};
    font-weight: ${theme.typography.weights.regular};
    line-height: ${theme.typography.lineHeight.normal};
    color: ${theme.colors.obsidianGray};
    background-color: ${theme.colors.sterileWhite};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.typography.weights.semibold};
    line-height: ${theme.typography.lineHeight.tight};
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: ${theme.typography.sizes.h1};
  }

  h2 {
    font-size: ${theme.typography.sizes.h2};
  }

  h3 {
    font-size: ${theme.typography.sizes.h3};
  }

  h4 {
    font-size: ${theme.typography.sizes.h4};
  }

  p {
    line-height: ${theme.typography.lineHeight.normal};
    margin-bottom: ${theme.spacing.md};
  }

  a {
    color: ${theme.colors.cobaltBlue};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${theme.colors.obsidianGray};
  }

  button {
    font-family: ${theme.typography.fontFamily.primary};
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  code {
    font-family: ${theme.typography.fontFamily.mono};
    background-color: ${theme.colors.brushedSteel};
    color: ${theme.colors.sterileWhite};
    padding: ${theme.spacing.xs};
    border-radius: ${theme.borders.radius};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input, textarea, select {
    font-family: ${theme.typography.fontFamily.primary};
    border: ${theme.borders.weight} solid ${theme.colors.borderGray};
    border-radius: ${theme.borders.radius};
    padding: ${theme.spacing.sm};
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: ${theme.colors.cobaltBlue};
    box-shadow: 0 0 0 2px rgba(0, 71, 171, 0.1);
  }

  /* Media Query: Tablet and Mobile */
  @media (max-width: ${theme.breakpoints.tablet}) {
    html {
      font-size: 15px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    html {
      font-size: 14px;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1.125rem;
    }

    body {
      padding: ${theme.spacing.sm};
    }
  }

  /* Page Transition Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
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

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(0, 71, 171, 0.2);
    }
    50% {
      box-shadow: 0 0 0 10px rgba(0, 71, 171, 0);
    }
  }

  @keyframes slideInFromTop {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes expandBorder {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes expandHeight {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  @keyframes scaleInCenter {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideAndFade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

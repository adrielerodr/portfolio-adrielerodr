import typographyVariants from './typographyVariants';

const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#A96D6D',
      contrastText: '#FFFFFF',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#FFFFFF',
    },
  },
  tertiary: {
    main: {
      color: '#FFFFFF',
      contrastText: '#070C0E',
    },
    light: {
      color: '#88989E',
      contrastText: '#FFFFFF',
    },
  },
  error: {
    color: '#E32B2B',
    contrastText: '#FFFFFF',
  },
  success: {
    color: '#0E802E',
    contrastText: '#FFFFFF',
  },
  modes: {
    dark: {},
  },
};

const breakpoints = {
  xs: 0, // extra small
  sm: 480, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};

export default {
  colors,
  breakpoints,
  typographyVariants,
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Montserrat\', sans-serif',
};

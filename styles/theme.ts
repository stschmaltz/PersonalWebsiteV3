import { extendTheme } from '@chakra-ui/react';

const brandPrimary = '#53be82';
const brandLight = '#ECF8F2';
const darkAccent = '#b13d55';

const colors = {
  brandPrimary: brandPrimary,
  brandLight: brandLight,
  lightAccent: '#D38B2C',
  darkAccent,
  brandColors: {
    '50': brandLight,
    '100': '#CBEBD9',
    '200': '#AADFC1',
    '300': '#89D2A9',
    '400': '#67C691',
    '500': brandPrimary,
    '600': '#389460',
    '700': '#2A6F48',
    '800': '#1C4A30',
    '900': '#0E2518',
  },
  red: {
    '50': '#F8ECEF',
    '100': '#EDCAD2',
    '200': '#E1A8B5',
    '300': '#D58698',
    '400': '#C9647B',
    '500': darkAccent,
    '600': '#97354B',
    '700': '#712838',
    '800': '#4C1A26',
    '900': '#260D13',
  },
};

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: {
    Text: {
      baseStyle: {
        color: 'gray.800',
        fontSize: '2xl',
      },
      variants: {
        bold: {
          fontWeight: 'bold',
          m: 0,
          display: 'inline-block',
        },
        h1: {
          color: colors.brandPrimary,
          fontWeight: 'bold',
          fontSize: '4xl',
        },
        h2: {
          color: colors.lightAccent,
          fontWeight: 'bold',
          fontSize: '3xl',
        },
        h3: {
          color: colors.lightAccent,
          fontWeight: 'bold',
          fontSize: '2xl',
        },
      },
    },
  },
  colors: {
    red: colors.red,
    yellow: {
      '50': '#FBF3EA',
      '100': '#F3DFC4',
      '200': '#EBCA9E',
      '300': '#E3B578',
      '400': '#DBA052',
      '500': '#D38B2C',
      '600': '#A96F23',
      '700': '#7F531A',
      '800': '#543812',
      '900': '#2A1C09',
    },
    green: colors.brandColors,
    transparent: 'transparent',
    primary: colors.brandPrimary,
    darkAccent: colors.darkAccent,
    lightShade: '#F3F7F8',
    lightAccent: colors.lightAccent,
    text: {
      brandPrimary: colors.brandPrimary,
      brandSecondary: colors.brandLight,
      accent: colors.lightAccent,
    },
    brand: colors.brandColors,
    accent: colors.red,
  },

  styles: {
    global: {
      body: {
        bg: 'gray.50',
        p: 0,
        m: 0,
        lineHeight: 1.6,
      },
      main: {
        mt: '4rem',
      },
      html: {
        bg: 'gray.50',
        p: 0,
        m: 0,
        lineHeight: 1.6,
      },
      a: {
        fontSize: 'xl',
        color: 'blue.200',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});

export { theme };

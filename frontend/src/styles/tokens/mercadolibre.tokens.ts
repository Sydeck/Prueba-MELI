/**
 * MercadoLibre Color Palette - Exact ColorZilla extraction
 * From: https://www.mercadolibre.com.mx/nothing-phone-3a-pro/...
 */

export const MLColors = {
  // Primary Colors (Blues - Main ML Brand)
  primary: {
    magenta: '#BA0095', // ML Primary magenta/pink
    blue: {
      dark: '#2968C8', // Dark blue
      main: '#3483FA', // Main ML Blue (buttons, links)
      light: '#4189E6', // Light blue (hover states)
    },
  },

  // Neutrals (Grays and backgrounds)
  neutral: {
    black: '#0F1111', // Deep black (main text)
    darkGray: '#565959', // Dark gray (secondary text)
    lightGray: '#D5D9D9', // Light gray (borders, dividers)
    bodyBg: '#EDEDED', // Body background
    navBg: '#F5F5F5', // Navigation/footer/table background
    surface: '#F7FAFA', // Card/surface background
    white: '#FFFFFF', // Pure white
  },

  // Success/Actions
  success: {
    green: '#00A650', // Success green (free shipping, etc.)
  },

  // Thermometer Levels (Urgency/Stock indicators)
  thermometer: {
    level1: '#F23D4F', // Crítico (stock muy bajo)
    level2: '#FF7733', // Urgente (tiempo limitado)
    level3: '#FFE600', // Advertencia (header nav color)
    level4: '#AADB1E', // Normal/OK
  },

  // Semantic Colors (using thermometer + success)
  semantic: {
    error: '#F23D4F', // Level 1 thermometer
    warning: '#FF7733', // Level 2 thermometer
    caution: '#FFE600', // Level 3 thermometer
    success: '#00A650', // Success green
    info: '#3483FA', // Main blue
  },
} as const;

// Typography optimized for ML
export const MLTypography = {
  fontFamily: {
    primary: [
      'Proxima Nova',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'sans-serif',
    ],
    secondary: ['Arial', 'Helvetica', 'sans-serif'],
  },

  fontSize: {
    xs: '0.75rem', // 12px - small labels
    sm: '0.875rem', // 14px - secondary text
    base: '1rem', // 16px - body text
    lg: '1.125rem', // 18px - large text
    xl: '1.25rem', // 20px - subtitles
    '2xl': '1.5rem', // 24px - product titles
    '3xl': '1.875rem', // 30px - prices
    '4xl': '2.25rem', // 36px - large prices
    '5xl': '3rem', // 48px - hero prices
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600', // ML preferred weight
    bold: '700',
  },

  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.625',
  },
} as const;

// ML Component Specifications
export const MLComponents = {
  // Buttons using exact ML colors
  button: {
    primary: {
      background: MLColors.primary.blue.main, // #3483FA
      backgroundHover: MLColors.primary.blue.dark, // #2968C8
      backgroundActive: MLColors.primary.blue.dark,
      text: MLColors.neutral.white,
      borderRadius: '6px',
      height: '40px',
      padding: '0 16px',
      fontWeight: MLTypography.fontWeight.semibold,
    },

    secondary: {
      background: MLColors.neutral.white,
      backgroundHover: MLColors.neutral.surface, // #F7FAFA
      text: MLColors.primary.blue.main, // #3483FA
      border: `1px solid ${MLColors.neutral.lightGray}`, // #D5D9D9
      borderRadius: '6px',
      height: '40px',
      padding: '0 16px',
    },

    // Thermometer buttons for urgency
    urgent: {
      background: MLColors.thermometer.level1, // #F23D4F
      backgroundHover: '#E02B3F',
      text: MLColors.neutral.white,
    },

    warning: {
      background: MLColors.thermometer.level2, // #FF7733
      backgroundHover: '#E6652A',
      text: MLColors.neutral.white,
    },
  },

  // Cards and surfaces
  card: {
    background: MLColors.neutral.white,
    border: `1px solid ${MLColors.neutral.lightGray}`, // #D5D9D9
    borderRadius: '8px',
    shadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '16px',
  },

  // Navigation
  navigation: {
    background: MLColors.neutral.navBg, // #F5F5F5
    text: MLColors.neutral.black, // #0F1111
    accent: MLColors.thermometer.level3, // #FFE600 (header nav color)
  },

  // Text colors
  text: {
    primary: MLColors.neutral.black, // #0F1111
    secondary: MLColors.neutral.darkGray, // #565959
    link: MLColors.primary.blue.main, // #3483FA
    linkHover: MLColors.primary.blue.dark, // #2968C8
    inverse: MLColors.neutral.white,
  },

  // Price display
  price: {
    color: MLColors.neutral.black, // #0F1111
    fontSize: MLTypography.fontSize['3xl'],
    fontWeight: MLTypography.fontWeight.normal,
  },

  // Urgency indicators
  urgency: {
    critical: {
      color: MLColors.thermometer.level1, // #F23D4F
      background: `${MLColors.thermometer.level1}10`, // 10% opacity
    },
    warning: {
      color: MLColors.thermometer.level2, // #FF7733
      background: `${MLColors.thermometer.level2}10`,
    },
    caution: {
      color: MLColors.thermometer.level3, // #FFE600
      background: `${MLColors.thermometer.level3}20`,
    },
  },
} as const;

// Tailwind CSS Configuration
export const tailwindMLConfig = {
  colors: {
    // ML Brand Colors
    'ml-magenta': MLColors.primary.magenta, // #BA0095
    'ml-blue': {
      dark: MLColors.primary.blue.dark, // #2968C8
      main: MLColors.primary.blue.main, // #3483FA
      light: MLColors.primary.blue.light, // #4189E6
    },
    'ml-green': MLColors.success.green, // #00A650

    // ML Neutrals
    'ml-black': MLColors.neutral.black, // #0F1111
    'ml-gray': {
      dark: MLColors.neutral.darkGray, // #565959
      light: MLColors.neutral.lightGray, // #D5D9D9
      body: MLColors.neutral.bodyBg, // #EDEDED
      nav: MLColors.neutral.navBg, // #F5F5F5
      surface: MLColors.neutral.surface, // #F7FAFA
    },

    // ML Thermometer (urgency levels)
    'ml-thermo': {
      '1': MLColors.thermometer.level1, // #F23D4F
      '2': MLColors.thermometer.level2, // #FF7733
      '3': MLColors.thermometer.level3, // #FFE600
      '4': MLColors.thermometer.level4, // #AADB1E
    },

    // Override Tailwind defaults
    primary: {
      500: MLColors.primary.blue.main, // #3483FA
      600: MLColors.primary.blue.dark, // #2968C8
      700: MLColors.primary.blue.dark,
    },

    gray: {
      900: MLColors.neutral.black, // #0F1111
      600: MLColors.neutral.darkGray, // #565959
      300: MLColors.neutral.lightGray, // #D5D9D9
      100: MLColors.neutral.navBg, // #F5F5F5
      50: MLColors.neutral.surface, // #F7FAFA
    },
  },

  backgroundColor: {
    body: MLColors.neutral.bodyBg, // #EDEDED
    nav: MLColors.neutral.navBg, // #F5F5F5
  },

  fontFamily: MLTypography.fontFamily,
  fontSize: MLTypography.fontSize,
  fontWeight: MLTypography.fontWeight,
} as const;

// Helper functions for component styling
export const getMLColor = (path: string) => {
  const keys = path.split('.');
  let value: any = MLColors;
  for (const key of keys) {
    value = value[key];
  }
  return value;
};

export const getThermometerColor = (level: 1 | 2 | 3 | 4) => {
  return MLColors.thermometer[`level${level}`];
};

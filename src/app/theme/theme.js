const theme = {
  fonts: {
    serif: 'Chosunilbo_myungjo, serif',
    semibold: 'Pretendard, sans-serif',
    light: 'Pretendard, sans-serif',
  },
  fontSizes: {
    large: '48px',
    medium: '24px',
    small: '16px',
    xSmall: '14px',
    xxSmall: '12px',
  },
  lineHeights: {
    large: '56px',
    medium: '32px',
    small: '24px',
    xSmall: '22px',
    xxSmall: '16px',
  },
  colors: {
    // Grayscale colors
    grayscale50: '#FFFFFF',
    grayscale100: '#FBFCFD',
    grayscale200: '#F1F4F8',
    grayscale300: '#777D84',
    grayscale400: '#000000',

    // Pastel colors
    pastelAlmondFrost: '#A28B78',
    pastelPorsche: '#E39D5D',
    pastelChenin: '#D7CA6B',
    pastelCaper: '#AACD7E',
    pastelCruise: '#BCDFD3',
    pastelOnahu: '#C5E0EB',
    pastelGlacier: '#7DB7BF',
    pastelSeagull: '#79B2CA',
    pastelJordyBlue: '#73A4D0',
    pastelPerano: '#A7B9E9',
    pastelPerfume: '#BDA6E1',
    pastelLavenderPink: '#F0B0D3',
    pastelAmaranth: '#E93B5A',
    pastelChestnut: '#C04646',

    // Neutral colors
    neutralSurfaceDefault: '#FFFFFF',
    neutralSurfaceWeak: '##FBFCFD',
    neutralTextDefault: '#000000',
    neutralTextWeak: '##777D84',
    neutralTextRevDefault: '#FFFFFF',
    neutralBorderDefault: '#000000',

    // Brand colors
    brandSurfaceDefault: '#FFFFFF',
    brandTextIncome: '#79B2CA',
    brandTextExpense: '##E93B5A',

    //danger colors
    dangerSurfaceDefault: '#E93B5A',
    dangerTextDefault: '#E93B5A',
    dangerTextRevDefault: '#FFFFFF',
    dangerBorderDefault: '#E93B5A',
  },
};

// Add typography here
theme.typography = {
  serif48: {
    fontFamily: theme.fonts.serif,
    fontSize: theme.fontSizes.large,
    lineHeight: theme.lineHeights.large,
  },
  serif24: {
    fontFamily: theme.fonts.serif,
    fontSize: theme.fontSizes.medium,
    lineHeight: theme.lineHeights.medium,
  },
  serif14: {
    fontFamily: theme.fonts.serif,
    fontSize: theme.fontSizes.xSmall,
    lineHeight: theme.lineHeights.xxSmall,
  },
  semibold16: {
    fontFamily: theme.fonts.semibold,
    fontSize: theme.fontSizes.small,
    lineHeight: theme.lineHeights.small,
    fontWeight: '600',
  },
  semibold14: {
    fontFamily: theme.fonts.semibold,
    fontSize: theme.fontSizes.xSmall,
    lineHeight: theme.lineHeights.xxSmall,
    fontWeight: '600',
  },
  semibold12: {
    fontFamily: theme.fonts.semibold,
    fontSize: theme.fontSizes.xxSmall,
    lineHeight: theme.lineHeights.xxSmall,
    fontWeight: '600',
  },
  light16: {
    fontFamily: theme.fonts.light,
    fontSize: theme.fontSizes.small,
    lineHeight: theme.lineHeights.medium,
    fontWeight: '300',
  },
  light14: {
    fontFamily: theme.fonts.light,
    fontSize: theme.fontSizes.xSmall,
    lineHeight: theme.lineHeights.small,
    fontWeight: '300',
  },
  light12: {
    fontFamily: theme.fonts.light,
    fontSize: theme.fontSizes.xxSmall,
    lineHeight: theme.lineHeights.small,
    fontWeight: '300',
  },
};

export default theme;

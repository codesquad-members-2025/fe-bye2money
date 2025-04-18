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
    grayscale100: '#F8CFD',
    grayscale200: '#F1F4F8',
    grayscale300: '#777D84',
    grayscale400: '#000000',

    // Pastel colors
    pastelAlmondFrost: '#A28B78',
    pastelPorsche: '#E39D5D',
    pastelChenin: '#D7CA6B',
    pastelCaper: '#AACD7E',
    pastelCruise: '#8CFDFA',
    pastelOnahu: '#C5E0EB',
    pastelGlacier: '#D7D78F',
    pastelSeagull: '#79B2CA',
    pastelJordyBlue: '#73A4D0',
    pastelPerano: '#A78E9B',
    pastelPerfume: '#BD8AE1',
    pastelLavenderPink: '#F08D03',
    pastelAmaranth: '#E93B5A',
    pastelChestnut: '#C04C46',

    // Neutral colors
    neutralSurfaceDefault: '#F0F0F0',
    neutralTextDefault: '#333333',
    neutralTextWeak: '#777777',
    neutralTextRevDefault: '#AAAAAA',
    neutralBorderDefault: '#DDDDDD',

    // Brand colors
    brandSurfaceDefault: '#F0F0F0',
    brandTextIncome: '#79B2CA',
    brandTextExpense: '#E93B5A',
  },
};

// Add typography here
theme.typography = {
  serif48: {
    fontFamily: theme.fonts.serif,
    fontSize: theme.fontSizes.large,
    lineHeight: theme.lineHeights.large,
    fontWeight: 'normal',
  },
  serif24: {
    fontFamily: theme.fonts.serif,
    fontSize: theme.fontSizes.medium,
    lineHeight: theme.lineHeights.medium,
    fontWeight: 'normal',
  },
  serif16: {
    fontFamily: theme.fonts.serif,
    fontSize: theme.fontSizes.small,
    lineHeight: theme.lineHeights.small,
    fontWeight: 'normal',
  },
  semibold16: {
    fontFamily: theme.fonts.semibold,
    fontSize: theme.fontSizes.small,
    lineHeight: theme.lineHeights.small,
    fontWeight: '600', // Semibold
  },
  semibold14: {
    fontFamily: theme.fonts.semibold,
    fontSize: theme.fontSizes.xSmall,
    lineHeight: theme.lineHeights.xSmall,
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
    lineHeight: theme.lineHeights.small,
    fontWeight: '300',
  },
  light14: {
    fontFamily: theme.fonts.light,
    fontSize: theme.fontSizes.xSmall,
    lineHeight: theme.lineHeights.xSmall,
    fontWeight: '300',
  },
  light12: {
    fontFamily: theme.fonts.light,
    fontSize: theme.fontSizes.xxSmall,
    lineHeight: theme.lineHeights.xxSmall,
    fontWeight: '300',
  },
};

export default theme;

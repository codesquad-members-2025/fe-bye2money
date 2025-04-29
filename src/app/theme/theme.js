// 1. Design tokens (raw values)
const fonts = {
  serif: 'Chosunilbo_myungjo, serif',
  semibold: 'Pretendard, sans-serif',
  light: 'Pretendard, sans-serif',
};

const fontSizes = {
  large: '48px',
  medium: '24px',
  small: '16px',
  xSmall: '14px',
  xxSmall: '12px',
};

const lineHeights = {
  large: '56px',
  medium: '32px',
  small: '24px',
  xSmall: '22px',
  xxSmall: '16px',
};

const colorsRaw = {
  // Grayscale
  grayscale50: '#FFFFFF',
  grayscale100: '#FBFCFD',
  grayscale200: '#F1F4F8',
  grayscale300: '#777D84',
  grayscale400: '#000000',

  // Pastel
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
};

// 2. Semantic tokens (meaningful groupings)
const typography = {
  serif48: {
    fontFamily: fonts.serif,
    fontSize: fontSizes.large,
    lineHeight: lineHeights.large,
  },
  serif24: {
    fontFamily: fonts.serif,
    fontSize: fontSizes.medium,
    lineHeight: lineHeights.medium,
  },
  serif14: {
    fontFamily: fonts.serif,
    fontSize: fontSizes.xSmall,
    lineHeight: lineHeights.xxSmall,
  },
  semibold16: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small,
    fontWeight: '600',
  },
  semibold14: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.xSmall,
    lineHeight: lineHeights.xxSmall,
    fontWeight: '600',
  },
  semibold12: {
    fontFamily: fonts.semibold,
    fontSize: fontSizes.xxSmall,
    lineHeight: lineHeights.xxSmall,
    fontWeight: '600',
  },
  light16: {
    fontFamily: fonts.light,
    fontSize: fontSizes.small,
    lineHeight: lineHeights.medium,
    fontWeight: '300',
  },
  light14: {
    fontFamily: fonts.light,
    fontSize: fontSizes.xSmall,
    lineHeight: lineHeights.small,
    fontWeight: '300',
  },
  light12: {
    fontFamily: fonts.light,
    fontSize: fontSizes.xxSmall,
    lineHeight: lineHeights.small,
    fontWeight: '300',
  },
};

const neutral = {
  neutralSurfaceDefault: colorsRaw.grayscale50,
  neutralSurfaceWeak: colorsRaw.grayscale100,
  neutralSurfacePoint: colorsRaw.grayscale200,
  neutralTextDefault: colorsRaw.grayscale400,
  neutralTextWeak: colorsRaw.grayscale300,
  neutralTextRevDefault: colorsRaw.grayscale50,
  neutralBorderDefault: colorsRaw.grayscale400,
};

const brand = {
  brandSurfaceDefault: colorsRaw.grayscale50,
  brandTextIncome: colorsRaw.pastelSeagull,
  brandTextExpense: colorsRaw.pastelAmaranth,
};

const danger = {
  dangerSurfaceDefault: colorsRaw.pastelAmaranth,
  dangerTextDefault: colorsRaw.pastelAmaranth,
  dangerTextRevDefault: colorsRaw.grayscale50,
  dangerBorderDefault: colorsRaw.pastelAmaranth,
};

const colors = {
  ...colorsRaw,
  ...neutral,
  ...brand,
  ...danger,
};

const categoryColors = {
  생활: 'pastelPerano',
  '쇼핑/뷰티': 'pastelChenin',
  '의료/건강': 'pastelCruise',
  식비: 'pastelOnahu',
  교통: 'pastelGlacier',
  '문화/여가': 'pastelPerfume',
  미분류: 'pastelLavenderPink',
  월급: 'pastelPorsche',
  '기타 수입': 'pastelAlmondFrost',
  용돈: 'pastelCaper',
};

const theme = {
  typography,
  colors,
  categoryColors,
};

export default theme;

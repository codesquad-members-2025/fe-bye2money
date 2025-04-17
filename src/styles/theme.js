export const theme = {
  font: {
    serif: "'ChosunNm', serif", // 조선일보명조
    sans: "'Pretendard', sans-serif",
    size: {
      xl: "48px",
      lg: "24px",
      md: "16px",
      sm: "14px",
      xs: "12px",
    },
    lineHeight: {
      xl: "56px",
      lg: "32px",
      md: "24px",
      sm: "16px",
    },
    weight: {
      semibold: 600,
      light: 300,
    },
  },
  color: {
    grayscale: {
      50: "#FFFFFF",
      100: "#FBFCFD",
      200: "#F1F4F8",
      300: "#777D84",
      400: "#000000",
    },
    pastel: {
      almondFrost: "#A28878",
      porsche: "#E39D5D",
      chenin: "#D7CA6B",
      caper: "#AACD7E",
      cruise: "#BCDFD3",
      onahau: "#C5E0EB",
      glacier: "#7DB7BF",
      seagull: "#79B2CA",
      jordyBlue: "#73A4D0",
      perano: "#A7B9E9",
      perfume: "#BDA6E1",
      lavenderPink: "#F0B0D3",
      amaranth: "#E93B5A",
      chestnut: "#C04646",
    },
    token: {
      surface: {
        weak: "#FBFCFD", // grayscale.100
        default: "#FFFFFF", // grayscale.50
        point: "#F1F4F8", // grayscale.200
      },
      text: {
        weak: "#777D84", // grayscale.300
        default: "#000000", // grayscale.400
        rev: "#FFFFFF", // grayscale.50
        income: "#79B2CA", // seagull
        expense: "#C04646", // chestnut
      },
      border: {
        default: "#000000", // grayscale.400
      },
      danger: {
        surface: "#E93B5A",
        text: "#E93B5A",
        textRev: "#FFFFFF",
        border: "#E93B5A",
      },
      chip: {
        10: "#A28878",
        20: "#E39D5D",
        30: "#D7CA6B",
        40: "#AACD7E",
        50: "#BCDFD3",
        60: "#C5E0EB",
        70: "#7DB7BF",
        80: "#73A4D0",
        90: "#A7B9E9",
        100: "#BDA6E1",
        110: "#F0B0D3",
        120: "#C04646",
      },
    },
  },
};

// src/styles/theme.ts
import { Theme } from "@emotion/react";

export const theme: Theme = {
  // 1) 폰트 패밀리
  fontFamily: {
    serif: `"Joseon-ilbo Myeongjo", serif`,
    sans: [
      "Pretendard",
      "ui-sans-serif",
      "system-ui" /* …defaultTheme.fontFamily.sans */,
    ],
  },

  // 2) 폰트 사이즈 + 라인하이트
  fontSize: {
    "serif-48": ["3rem", { lineHeight: "3.5rem" }],
    "serif-24": ["1.5rem", { lineHeight: "2rem" }],
    "serif-14": ["0.875rem", { lineHeight: "1rem" }],

    "semibold-16": ["1rem", { lineHeight: "1.5rem" }],
    "semibold-14": ["0.875rem", { lineHeight: "1rem" }],
    "semibold-12": ["0.75rem", { lineHeight: "1rem" }],

    "lighttext-16": ["1rem", { lineHeight: "2rem" }],
    "lighttext-14": ["0.875rem", { lineHeight: "1.5rem" }],
    "lighttext-12": ["0.75rem", { lineHeight: "1.5rem" }],
  },

  // 3) 컬러 토큰
  colors: {
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
    neutral: {
      surface: {
        weak: "#FBFCFD",
        default: "#F1F4F8",
        point: "#777D84",
      },
      text: {
        weak: "#777D84",
        default: "#000000",
        revDefault: "#FFFFFF",
      },
      border: {
        default: "#000000",
      },
    },
    brand: {
      surface: { default: "#FFFFFF" },
      text: {
        income: "#79B2CA",
        expense: "#C04646",
      },
    },
    danger: {
      surface: { default: "#E93B5A" },
      text: {
        default: "#E93B5A",
        revDefault: "#FFFFFF",
      },
      border: { default: "#E93B5A" },
    },
    colorchip: {
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

  // 4) 간단한 spacing 예시
  spacing: {
    icon: "1.5rem",
  },
};



// src/types/emotion.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fontFamily: {
      serif: string;
      sans: string[];
    };
    fontSize: Record<
      string,
      [
        string,
        {
          lineHeight: string;
        }
      ]
    >;
    colors: {
      grayscale: Record<number, string>;
      pastel: Record<string, string>;
      neutral: {
        surface: {
          weak: string;
          default: string;
          point: string;
        };
        text: {
          weak: string;
          default: string;
          revDefault: string;
        };
        border: {
          default: string;
        };
      };
      brand: {
        surface: {
          default: string;
        };
        text: {
          income: string;
          expense: string;
        };
      };
      danger: {
        surface: {
          default: string;
        };
        text: {
          default: string;
          revDefault: string;
        };
        border: {
          default: string;
        };
      };
      colorchip: Record<number, string>;
    };
    spacing: {
      icon: string;
    };
  }
}
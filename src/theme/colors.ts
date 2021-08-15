import { Colors } from "./types";

export const baseColors = {
  failure: "#ff6f60",
  primary: "#b0bec5",
  primaryBright: "#cfd8dc",
  primaryDark: "#90a4ae",
  secondary: "#9f9f9f",
  success: "#76d275",
  warning: "#5c007a",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#EFF4F5",
  tertiary: "#EFF4F5",
  text: "#2c2c2c",
  textDisabled: "#BDC2C4",
  textSubtle: "#6d6d6d",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e2e9f0",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F2F6F9",
  textDisabled: "#9b95a7",
  textSubtle: "#e2e9f0",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

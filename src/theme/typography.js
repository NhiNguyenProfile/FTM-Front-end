// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const typography = {
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700.5,
    lineHeight: 24 / 14,
    letterSpacing: 0.2,
    fontSize: pxToRem(16.999999999),
    textTransform: "none",
  },
  loginButton: {
    fontWeight: 700,
    color: "#FEFEFE",
    lineHeight: 24 / 14,
    letterSpacing: 0.2,
    fontSize: pxToRem(14),
    textTransform: "none",
  },
  label: {
    fontWeight: 700,
    color: "#4A4A4A",
    lineHeight: 24 / 14,
    letterSpacing: 0.2,
    fontSize: pxToRem(14),
    textTransform: "none",
  },
  forget: {
    fontWeight: 700,
    color: "grey",
    lineHeight: 24 / 14,
    letterSpacing: 0.2,
    fontSize: pxToRem(14),
    textTransform: "none",
  },
  subtitle: {
    color: "#6c6c6c",
    textTransform: "uppercase",
    lineHeight: "normal",
    textShadow: "0px 4px 8px #a4a4a4",
    fontWeight: 100,
    lineHeight: 64 / 48,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 20, md: 28, lg: 34 }),
  },
  title: {
    textTransform: "uppercase",
    color: "#444",
    fontSize: "4em",
    textShadow: "0px 3px 3px #a4a4a4",
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 50, md: 56, lg: 62 }),
  },
  subName: {
    color: "#444",
    textTransform: "uppercase",
    lineHeight: "normal",
    textShadow: "0px 2px 2px #a4a4a4",
    fontWeight: 300,
    lineHeight: 64 / 48,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 24, md: 32, lg: 36 }),
  },
  name: {
    textTransform: "uppercase",
    color: "#444",
    fontSize: "4em",
    textShadow: "0px 3px 3px #a4a4a4",
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 30, md: 36, lg: 42 }),
  },
  blueCard: {
    fontWeight: 750,
    color: "#89B4C8",
    lineHeight: 24 / 14,
    letterSpacing: 0.2,
    fontSize: pxToRem(18),
    textTransform: "uppercase",
  },
};

export default typography;

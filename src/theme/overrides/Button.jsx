// ----------------------------------------------------------------------

export default function Button(theme) {
  const defaultStyle = {
    height: "2.6em",
    textTransform: "none",
    textShadow: "none",
    padding: "0px 20px",
  };

  return {
    MuiButton: {
      variants: [
        {
          props: { variant: "login" },
          style: {
            width: "100%",
            background: theme.palette.button.blue,
            ...defaultStyle,
          },
        },
        {
          props: { variant: "solid", color: "blueLinear" },
          style: {
            background: theme.palette.button.blueLinear,
            ...defaultStyle,
          },
        },

        {
          props: { variant: "solid", color: "yellowLinear" },
          style: {
            background: theme.palette.button.yellowLinear,
            ...defaultStyle,
            "&:hover": {},
          },
        },
        {
          props: { variant: "solid", color: "white" },
          style: {
            background: theme.palette.button.white,
            ...defaultStyle,
            "&:hover": {},
          },
        },
      ],
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
        },
      },
    },
  };
}

// ----------------------------------------------------------------------

import { pxToRem } from "../typography";

export default function TextField(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "5px !important",
          padding: "10px 25px !important",
          backgroundColor: "rgba(219, 219, 219, 0.18)",
          fontWeight: 550,
          lineHeight: 24 / 14,
          letterSpacing: 0.2,
          fontSize: pxToRem(14) + "!important",
        },
      },
    },
  };
}

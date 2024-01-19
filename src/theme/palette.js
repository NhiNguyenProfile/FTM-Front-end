import { alpha } from "@mui/material";

const PRIMARY = {
  lighter: "#fff",
  light: "#DDE6ED",
  main: "#0f76b9",
  dark: "#526D82",
  darker: "#27374D",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#ED9181",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const BLUE = {
  0: "#E9F1F5",
  100: "#E0E9ED",
  200: "#D0E8F2",
  300: "#B7CDD7",
  400: "#8FB4C5",
};

const INFO = {
  lighter: "#9eb3c2",
  light: "#1c7293",
  main: "#f3941a",
  dark: "#1b3b6f",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#09b548",
  dark: "#229A16",
  darker: "#08660D",
};

const WARNING = {
  lighter: "#fff8d6",
  light: "#fff0ad",
  main: "#54b2e6",
  dark: "#efcd5d",
  darker: "#d3b44e",
};

const ERROR = {
  lighter: "#fff0f3",
  light: "#e01e37",
  main: "#aa0203",
  dark: "#b21e35",
  darker: "#85182a",
  contrastText: "#fff",
};

const BUTTON = {
  faded: "rgba(255, 255, 255, 0.47)",
  white: "#FEFEFE",
  blue: "#59B8E2",
  yellowLinear: "linear-gradient(93deg, #FFE79F 2.76%, #F5D370 101.46%)",
  blueLinear: "linear-gradient(93deg, #BDE4F5 0.76%, #90B4C3 99.46%)",
};

const PAPER = {
  yellow: "#F6DC8D",
  blue: "#ECF3F5",
  blueLinear: "linear-gradient(123deg, #9FC9DC 57.19%, #6C98AC 100%)",
};

const palette = {
  common: { black: "#444444", white: "#FBFBFB" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  blue: BLUE,
  button: BUTTON,
  paper: PAPER,
  text: {
    primary: "#444444",
    secondary: "#6C6C6C",
    disabled: "#333533",
    blue: "#89B4C8",
  },
  background: {
    default: "#FBFBFB",
    natural: "",
  },
  action: {
    active: "#000",
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;

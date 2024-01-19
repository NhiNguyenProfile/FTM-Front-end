import logo from "../../assets/logo.png";
import React from "react";
import { styled } from "@mui/material";

const MyLogo = styled("img")(({ theme }) => ({
  height: "4em",
  width: "3.8em",
  [theme.breakpoints.up("sm")]: {
    height: "5em",
    width: "4.8em",
  },
}));

function Logo() {
  return <MyLogo src={logo} alt="Logo" />;
}

export default Logo;

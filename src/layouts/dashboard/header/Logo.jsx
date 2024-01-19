import { styled } from "@mui/material";
import React from "react";
import logo from "../../../assets/logo.png";

const NavLogo = styled("img")({
  height: "4em",
  width: "4em",
});

function Logo() {
  return <NavLogo src={logo} alt="Logo Công đoàn viên chức" />;
}

export default Logo;

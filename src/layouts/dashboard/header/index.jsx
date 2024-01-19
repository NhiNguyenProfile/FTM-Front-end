import React from "react";
import Bar from "./Bar";
import Logout from "./Logout";
import { Container, styled } from "@mui/material";
import Logo from "./logo";
import Report from "./Report";

const StyledRoot = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "2.3em",
});

function Header() {
  return (
    <StyledRoot>
      <Logo />
      <Bar />
      <Report />
      <Logout />
    </StyledRoot>
  );
}

export default Header;

import React from "react";
import NavSection from "../../../components/nav-section/NavSection";
import barConfig from "./userConfig";
import { styled } from "@mui/material";

const StyledBar = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  transform: "translateX(-9em)",
}));

function Bar() {
  return (
    <StyledBar>
      <NavSection listNav={barConfig} />
    </StyledBar>
  );
}

export default Bar;

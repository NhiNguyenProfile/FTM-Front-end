import { styled } from "@mui/material";
import React from "react";

const BgOverlay = styled("div")({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(51, 117, 147, 0.12)",
  zIndex: "0",
});
function Overlay() {
  return <BgOverlay></BgOverlay>;
}

export default Overlay;

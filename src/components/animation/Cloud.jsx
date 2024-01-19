import React from "react";
import cloud from "../../assets/cloud.png";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material";

const float1 = keyframes`
from {
    transform: translateX(-10vw);
}
to {
    transform: translateX(0vw);
}
`;

const float2 = keyframes`
from {
    transform: translateX(0vw);
}
to {
    transform: translateX(20vw);
}
`;
const Cloud1 = styled("img")({
  opacity: "1",
  width: "40vw",
  position: "absolute",
  top: "10vh",
  left: "20vw",
  zIndex: "0",
  animationName: float1,
  animation: `20s linear 0s infinite alternate ${float2}`,
});

const Cloud2 = styled("img")({
  opacity: "1",
  width: "35vw",
  position: "absolute",
  top: "50vh",
  left: "10vw",
  zIndex: "2",
  animationName: float2,
  animation: `25s linear 0s infinite alternate ${float1}`,
});

function Cloud() {
  return (
    <>
      <Cloud1 src={cloud} />
      <Cloud2 src={cloud} />
    </>
  );
}

export default Cloud;

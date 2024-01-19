import { Slide, styled } from "@mui/material";
import React from "react";

const MySlide = styled(Slide)({
  position: "absolute",
  right: 0,
  boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(20px)",
  width: "100%",
  height: "100vh",
});

function Layer() {
  return (
    <>
      <MySlide
        direction="left"
        in={true}
        timeout={500}
        style={{
          width: "37vw",
          background: "rgba(251, 251, 251, 0.60)",
          zIndex: "4",
        }}
      >
        <h1></h1>
      </MySlide>
      <MySlide
        direction="left"
        in={true}
        timeout={1000}
        style={{
          width: "40.5vw",
          background: "rgba(251, 251, 251, 0.4)",
          zIndex: "3",
        }}
      >
        <h1></h1>
      </MySlide>
      <MySlide
        direction="left"
        in={true}
        timeout={1500}
        style={{
          width: "44vw",
          background: "rgba(251, 251, 251, 0.29)",
          zIndex: "2",
        }}
      >
        <h1></h1>
      </MySlide>
      <MySlide
        direction="left"
        in={true}
        timeout={2000}
        style={{
          width: "47.5vw",
          background: "rgba(251, 251, 251, 0.06)",
          zIndex: "1",
        }}
      >
        <h1></h1>
      </MySlide>
    </>
  );
}

export default Layer;

import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import InfoCard from "../sections/information/InfoCard";

const StyledName = styled("div")({
  margin: "3em 0 3em 0",
});

function HomePage() {
  return (
    <Container>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <StyledName>
        <Typography variant="subName">công đoàn cơ sở</Typography>
        <br />
        <Typography variant="name">
          nhà văn hóa khu công nghệ cao thành phố
        </Typography>
      </StyledName>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <InfoCard />
        </Grid>
        <Grid item xs={12} sm={8}></Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;

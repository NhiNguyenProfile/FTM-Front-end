import React from "react";

// image
import bg from "../assets/Desktop.png";

// components
import { Helmet } from "react-helmet-async";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../sections/auth/LoginForm";
import Overlay from "../components/custom/Overlay";

const Background = styled("div")({
  backgroundImage: `url('${bg}')`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
});

const MyGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: "#FEFEFE",
  height: "90vh",
  zIndex: "5",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  marginTop: "5vh",
  borderRadius: "5px",
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
    marginTop: "0vh",
  },
}));
const Wrapper = styled("div")({});

function Login() {
  return (
    <Background>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>

      <Wrapper>
        <Overlay />
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <MyGrid
            item
            xs={12}
            sm={3.5}
            padding={5}
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <LoginForm />
          </MyGrid>
        </Grid>
      </Wrapper>
    </Background>
  );
}

export default Login;

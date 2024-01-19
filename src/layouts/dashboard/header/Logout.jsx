import { Button, Typography } from "@mui/material";
import React from "react";

function Logout() {
  return (
    <Button variant="solid" color="white" style={{ padding: "0 1.7em" }}>
      <Typography variant="button">Đăng xuất</Typography>
    </Button>
  );
}

export default Logout;

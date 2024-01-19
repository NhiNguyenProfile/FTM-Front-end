import { Button, Typography } from "@mui/material";
import React from "react";

function Report() {
  return (
    <Button
      variant="solid"
      color="yellowLinear"
      style={{ padding: "0 1.9em", transform: "translateX(9em)" }}
    >
      <Typography variant="button">Báo cáo</Typography>
    </Button>
  );
}

export default Report;

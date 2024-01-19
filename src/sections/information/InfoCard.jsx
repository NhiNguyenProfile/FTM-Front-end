import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";

function InfoCard() {
  return (
    <Card variant="blue">
      <Box
        variant="blueCardHeader"
        style={{
          border: "2px solid #89B4C7",
          borderRadius: "30px",
          padding: "10px",
        }}
      >
        <Typography variant="blueCard">Thông tin công đoàn</Typography>
      </Box>

      <Button variant="solid" color="white">
        Chỉnh sửa
      </Button>
    </Card>
  );
}

export default InfoCard;

import PropTypes from "prop-types";
import { Typography, styled } from "@mui/material";
import React from "react";

Title.proptypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  align: PropTypes.string,
};

function Title({ subtitle, title, align }) {
  return (
    <>
      <Typography variant="subtitle" style={{ textAlign: align }}>
        {subtitle}
      </Typography>
      <Typography variant="title" style={{ textAlign: align }}>
        {title}
      </Typography>
    </>
  );
}

export default Title;

import { Box, List, ListItemButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavSection.scss";

NavSection.propTypes = {
  data: PropTypes.array,
};

function NavSection({ listNav = [], ...other }) {
  return (
    <Box height={"100% !important"} {...other}>
      <List
        disablePadding
        style={{
          backgroundColor: "#ECF3F5",
          height: "3.5em",
          borderRadius: "100px",
        }}
      >
        {listNav.map((item) => (
          <NavItem key={item.tag} item={item} />
        ))}
      </List>
    </Box>
  );
}

function NavItem({ item }) {
  const { title, path } = item;
  return (
    <ListItemButton component={NavLink} to={path} className="ListItemButton">
      <Typography variant="button" color={"transparent"} className="button">
        {title}
      </Typography>
    </ListItemButton>
  );
}

export default NavSection;

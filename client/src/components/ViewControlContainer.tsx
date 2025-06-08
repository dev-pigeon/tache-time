import {
  Collapse,
  IconButton,
  Paper,
  Tooltip,
  Stack,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "../styles/ViewControlContainer.css";
import { useState } from "react";

const ViewControlContainer = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Paper id={"view-control-container"}>
      <Tooltip title="View Menu" placement="bottom" arrow>
        <IconButton onClick={toggleMenu}>
          <MenuIcon sx={{ fill: "black" }} />
        </IconButton>
      </Tooltip>
      <Collapse in={showMenu}>
        <Stack
          display={"flex"}
          alignItems={"center"}
          direction={"column"}
          spacing={2}
        >
          <MenuIcon></MenuIcon>
          <MenuIcon></MenuIcon>
          <MenuIcon></MenuIcon>
        </Stack>
      </Collapse>
    </Paper>
  );
};

export default ViewControlContainer;

import { Collapse, IconButton, Paper, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "../styles/ViewControl.css";
import { useState } from "react";
import ViewControl from "./ViewControl";

const ViewControlContainer = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Paper id={"view-control-container"}>
      <Tooltip
        title={showMenu ? "Close Mode Menu" : "Open Mode Menu"}
        placement="left"
        arrow
      >
        <IconButton onClick={toggleMenu}>
          <MenuIcon sx={{ fill: "black" }} />
        </IconButton>
      </Tooltip>
      <Collapse in={showMenu}>
        <ViewControl />
      </Collapse>
    </Paper>
  );
};

export default ViewControlContainer;

import { IconButton, Paper, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "../styles/ViewControlContainer.css";

const ViewControlContainer = () => {
  return (
    <Paper id={"view-control-container"}>
      <Tooltip title="View Menu" placement="bottom" arrow>
        <IconButton>
          <MenuIcon sx={{ fill: "black" }} />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default ViewControlContainer;

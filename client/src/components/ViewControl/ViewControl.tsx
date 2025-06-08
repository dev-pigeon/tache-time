import { IconButton, Stack, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import "../../styles/ViewControl.css";

const ViewControl = () => {
  return (
    <Stack
      height={150}
      display={"flex"}
      alignItems={"center"}
      direction={"column"}
      justifyContent={"center"}
      spacing={3}
    >
      <Tooltip title="Edit Mode" arrow placement="left">
        <IconButton>
          <ModeEditIcon sx={{ fill: "black" }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="View Mode" arrow placement="left">
        <IconButton>
          <VisibilityIcon sx={{ fill: "black" }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ViewControl;

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton, Stack, Tooltip } from "@mui/material";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

import "../styles/ViewControl.css";

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
          <EditNoteOutlinedIcon sx={{ fill: "black" }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="View Mode" arrow placement="left">
        <IconButton>
          <VisibilityOutlinedIcon sx={{ fill: "black" }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ViewControl;

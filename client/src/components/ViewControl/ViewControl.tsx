import { IconButton, Stack, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import "../../styles/ViewControl.css";
import { useViewControlReturn } from "../../hooks/useViewControl";

export interface ViewControlProps {
  viewControlHook: useViewControlReturn;
}

const ViewControl = ({ viewControlHook }: ViewControlProps) => {
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
        <IconButton
          onClick={() => {
            viewControlHook.changeMode("Edit");
          }}
        >
          <ModeEditIcon sx={{ fill: "black" }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="View Mode" arrow placement="left">
        <IconButton
          onClick={() => {
            viewControlHook.changeMode("View");
          }}
        >
          <VisibilityIcon sx={{ fill: "black" }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ViewControl;

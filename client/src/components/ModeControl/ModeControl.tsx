import { Box, Switch, Tooltip } from "@mui/material";

import "../../styles/ModeControl.css";
import { useModeControlReturn } from "../../hooks/useModeControl";

export interface ModeControl {
  viewControlHook: useModeControlReturn;
}

const ModeControl = ({ viewControlHook }: ModeControl) => {
  const checkedColor = "#67ba6b";
  const uncheckedColor = "#545454";
  return (
    <Tooltip
      arrow
      placement="top"
      title={viewControlHook.editMode ? "Toggle View Mode" : "Toggle Edit Mode"}
    >
      <Box id={"view-control-container"}>
        <Switch
          sx={{
            "& .MuiSwitch-switchBase": {
              color: uncheckedColor,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: checkedColor,
            },
            "& .MuiSwitch-track": {
              backgroundColor: uncheckedColor,
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: checkedColor,
            },
          }}
          onChange={viewControlHook.changeMode}
          checked={viewControlHook.editMode}
          color={"error"}
        ></Switch>
      </Box>
    </Tooltip>
  );
};

export default ModeControl;

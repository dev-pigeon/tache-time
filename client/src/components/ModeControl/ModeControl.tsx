import { Box, Switch, Tooltip } from "@mui/material";

import "../../styles/ModeControl.css";
import { useModeControlReturn } from "../../hooks/useModeControl";

export interface ModeControl {
  modeControlHook: useModeControlReturn;
}

const ModeControl = ({ modeControlHook }: ModeControl) => {
  const checkedColor = "#3b82f6"; // Modern blue
  const uncheckedColor = "#64748b"; // Modern muted
  return (
    <Tooltip
      arrow
      placement="top"
      title={modeControlHook.editMode ? "Toggle View Mode" : "Toggle Edit Mode"}
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
          onChange={modeControlHook.changeMode}
          checked={modeControlHook.editMode}
          color={"error"}
        ></Switch>
      </Box>
    </Tooltip>
  );
};

export default ModeControl;

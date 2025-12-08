import { IconButton, Stack, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";

import { TaskWidgetProps } from "./TaskWidget";
import { theme } from "../../styles/Theme";

interface TaskOptionsProps extends TaskWidgetProps {}

const TaskOptions = ({
  changeRenderedComponent,
  scheduleTasksHook,
  mode,
}: TaskOptionsProps) => {
  return (
    <Stack
      display={"flex"}
      height={200}
      alignItems={"center"}
      direction={"column"}
      justifyContent={"center"}
      spacing={3}
    >
      <Tooltip title="Schedule Tasks" arrow placement="left">
        <IconButton onClick={scheduleTasksHook.handleScheduleTasksClick}>
          <ScheduleSendIcon
            sx={{ fill: theme.palette.text.secondary, fontSize: 30 }}
          />
        </IconButton>
      </Tooltip>

      <Tooltip
        title={
          mode == true ? "Create Task" : "Switch to edit mode to add tasks."
        }
        arrow
        placement="left"
      >
        <IconButton
          onClick={() => {
            mode == true
              ? changeRenderedComponent({
                  addTask: true,
                  widget: false,
                  validation: false,
                })
              : {};
          }}
        >
          <AddCircleOutlineIcon
            sx={{ fill: theme.palette.text.secondary, fontSize: 30 }}
          />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default TaskOptions;

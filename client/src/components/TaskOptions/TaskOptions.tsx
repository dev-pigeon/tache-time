import { IconButton, Stack, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";

import "../../styles/ViewControl.css";
import { TaskWidgetProps } from "./TaskWidget";

interface TaskOptionsProps extends TaskWidgetProps {}

const TaskOptions = ({
  changeRenderedComponent,
  scheduleTasksHook,
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
          <ScheduleSendIcon sx={{ fill: "black", fontSize: 30 }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Create Task" arrow placement="left">
        <IconButton
          onClick={() => {
            changeRenderedComponent({
              addTask: true,
              widget: false,
              validation: false,
            });
          }}
        >
          <AddCircleOutlineIcon sx={{ fill: "black", fontSize: 30 }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default TaskOptions;

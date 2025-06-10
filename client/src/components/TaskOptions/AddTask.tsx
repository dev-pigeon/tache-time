import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import "../../styles/AddTask.css";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "../CustomTextField";

import CustomDatePicker from "../CustomDatePicker";
import CustomTimePicker from "../CustomTimePicker";

import useAddTask from "../../hooks/useAddTask";
const AddTask = () => {
  const addTaskHook = useAddTask();

  return (
    <Paper id={"add-task-outercontainer"}>
      <Stack width={"100%"} position={"relative"} alignItems={"center"}>
        <Stack id={"title-container"} direction={"row"}>
          <Typography id={"title-label"}>Create Task</Typography>
          <IconButton
            sx={{
              "& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible": {
                color: "#d3362e",
                opacity: 0.5,
              },
            }}
            id={"close-button"}
          >
            <CloseIcon sx={{ fill: "white", fontSize: 30 }} />
          </IconButton>
        </Stack>

        <Stack id={"name-time-container"} direction={"row"}>
          <CustomTextField
            id={"task-name"}
            onChange={addTaskHook.handleStringElementChange}
            value={addTaskHook.taskName}
            sxIn={{ left: "3%" }}
            widthIn={"40%"}
            label="Task Name*"
          />
          <CustomTextField
            id="task-est-time"
            value={addTaskHook.estimatedHours}
            onChange={addTaskHook.handleStringElementChange}
            widthIn={"40%"}
            label="Estimated Time*"
            sxIn={{ left: "15%" }}
            adornment="hours"
          />
        </Stack>

        <Stack direction={"row"} id={"duedate-container"}>
          <CustomDatePicker
            value={addTaskHook.taskDueDate}
            onChange={addTaskHook.setTaskDueDate}
            sxIn={{ position: "relative", width: "40%", left: "3%" }}
          />
          <CustomTimePicker
            value={addTaskHook.taskTimeDue}
            onChange={addTaskHook.setTaskTimeDue}
            sxIn={{ position: "relative", width: "40%", left: "15%" }}
          />
        </Stack>

        <CustomTextField
          id="task-desc"
          value={addTaskHook.taskDescription}
          onChange={addTaskHook.handleStringElementChange}
          widthIn={"80%"}
          label="Description"
          rows={2}
          sxIn={{ top: "55%", right: "7%" }}
        />

        <Stack direction={"row"} id={"button-container"}>
          <Button id="confirm-button" variant="contained">
            Confirm
          </Button>
          <Button id={"cancel-button"} variant="contained">
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AddTask;

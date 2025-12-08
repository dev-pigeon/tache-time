import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import "../../styles/AddTask.css";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "../CustomTextField";

import CustomDatePicker from "../CustomDatePicker";
import CustomTimePicker from "../CustomTimePicker";
import useAddTask from "../../hooks/useAddTask";
import { useTaskListReturn } from "../../hooks/useTaskList";
import { renderedComponentProps } from "../../misc/TaskContainerViewController";

interface AddTaskProps {
  changeRenderedComponent: (props: renderedComponentProps) => void;
  taskListHook: useTaskListReturn;
  displayValidation: (message: string, status: "error" | "success") => void;
}

const AddTask = ({
  changeRenderedComponent,
  taskListHook,
  displayValidation,
}: AddTaskProps) => {
  const addTaskHook = useAddTask({ taskListHook, displayValidation });

  const closeAddTask = () => {
    changeRenderedComponent({
      addTask: false,
      widget: true,
      validation: false,
    });
  };

  return (
    <Paper id={"add-task-outercontainer"}>
      <Stack
        width={"100%"}
        height={"100%"}
        spacing={1.5}
        padding={2.5}
        boxSizing={"border-box"}
      >
        {/* Header */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={0.5}
        >
          <Typography id={"title-label"}>Create Task</Typography>
          <IconButton
            onClick={closeAddTask}
            size="small"
            sx={{
              "& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible": {
                color: "rgba(200, 60, 60, .95)",
                opacity: 0.5,
              },
            }}
          >
            <CloseIcon sx={{ fill: "white", fontSize: 24 }} />
          </IconButton>
        </Stack>

        {/* Task Name & Estimated Time */}
        <Stack direction={"row"} spacing={1.5} width={"100%"}>
          <CustomTextField
            id={"task-name"}
            onChange={addTaskHook.handleStringElementChange}
            value={addTaskHook.taskName}
            label="Task Name*"
            sxIn={{ flex: 1, minWidth: 0 }}
          />
          <CustomTextField
            tooltip="The estimated amount of time to complete the task."
            id="task-est-time"
            value={addTaskHook.estimatedHours}
            onChange={addTaskHook.handleStringElementChange}
            label="Est. Time*"
            adornment="hours"
            sxIn={{ width: "110px", flexShrink: 0 }}
          />
        </Stack>

        {/* Due Date & Time */}
        <Stack direction={"row"} spacing={1.5} width={"100%"}>
          <CustomDatePicker
            value={addTaskHook.taskDueDate}
            onChange={addTaskHook.setTaskDueDate}
            sxIn={{ flex: 1, minWidth: 0 }}
          />
          <CustomTimePicker
            value={addTaskHook.taskTimeDue}
            onChange={addTaskHook.setTaskTimeDue}
            sxIn={{ flex: 1, minWidth: 0 }}
          />
        </Stack>

        {/* Description */}
        <CustomTextField
          multiline
          id="task-desc"
          value={addTaskHook.taskDescription}
          onChange={addTaskHook.handleStringElementChange}
          label="Description"
          rows={2}
          sxIn={{ width: "100%" }}
        />

        {/* Action Buttons */}
        <Stack
          direction={"row"}
          spacing={1.5}
          justifyContent={"flex-end"}
          width={"100%"}
          sx={{ marginTop: "auto !important" }}
        >
          <Button
            onClick={closeAddTask}
            id={"cancel-button"}
            variant="contained"
            sx={{ minWidth: "90px" }}
          >
            Cancel
          </Button>
          <Button
            onClick={addTaskHook.createTask}
            id="confirm-button"
            variant="contained"
            sx={{ minWidth: "90px" }}
          >
            Confirm
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AddTask;

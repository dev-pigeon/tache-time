import {
  Collapse,
  IconButton,
  List,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import "../../styles/TaskList.css";
import { useTaskListReturn } from "../../hooks/useTaskList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface TaskListProps {
  taskListHook: useTaskListReturn;
}

const TaskList = ({ taskListHook }: TaskListProps) => {
  return (
    <Paper id="task-list-outer-container">
      <Stack
        paddingTop={0.6}
        direction={"row"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography id="task-list-title">{"Task List"}</Typography>
        <IconButton onClick={taskListHook.toggleList} id="task-list-iconbutton">
          {!taskListHook.listOpen ? (
            <ExpandMoreIcon className="task-list-icon" />
          ) : (
            <ExpandLessIcon className="task-list-icon" />
          )}
        </IconButton>
      </Stack>
      <Collapse in={taskListHook.listOpen}>
        <List>{/** map out the list items here */}</List>
      </Collapse>
    </Paper>
  );
};

export default TaskList;

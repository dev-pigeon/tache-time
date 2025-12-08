import { Paper, Typography, IconButton, Box } from "@mui/material";
import { TaskListItem } from "../../interfaces/TaskListItem";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import "../../styles/TaskListCard.css";

interface TaskListCardProps extends TaskListItem {
  removeTask: (taskID: string) => void;
  mode: boolean;
}

const TaskListCard = ({
  title,
  description,
  dateString,
  dueTime,
  estimatedTime,
  removeTask,
  id,
  mode,
}: TaskListCardProps) => {
  return (
    <Paper
      sx={{
        height: description ? 150 : 75,
        transition: "box-shadow .5s ease",
        ":hover": {
          boxShadow: "0px 0px 2px 1.5px rgba(59, 130, 246, 0.5)",
        },
      }}
      id={"task-list-card-outer-container"}
    >
      <Typography id={"task-list-item-title"}>{title}</Typography>
      <IconButton
        onClick={() => {
          mode == true ? removeTask(id) : {};
        }}
        sx={{
          transition: "background-color .5s ease",
          "&:hover": {
            backgroundColor: "rgba(255, 0, 17, 0.36)",
          },
        }}
        id={"task-list-item-delete"}
      >
        <DeleteForeverOutlinedIcon />
      </IconButton>

      <Typography
        sx={{ top: description ? "25%" : "40%" }}
        id={"task-list-item-date"}
      >
        {`Due ${dateString} | ${dueTime}`}
      </Typography>

      <Typography
        id={"task-list-item-est-time"}
      >{`Est ${estimatedTime} hours`}</Typography>

      <Box id={"task-list-item-description-container"}>
        <Typography>{description}</Typography>
      </Box>
    </Paper>
  );
};

export default TaskListCard;

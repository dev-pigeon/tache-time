import { Paper, Typography, IconButton, Box } from "@mui/material";
import { TaskListItem } from "../../interfaces/TaskListItem";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import "../../styles/TaskListCard.css";

interface TaskListCardProps extends TaskListItem {
  removeTask: (taskID: string) => void;
}

const TaskListCard = ({
  title,
  description,
  dueDate,
  dueTime,
  estimatedTime,
  removeTask,
  id,
}: TaskListCardProps) => {
  return (
    <Paper
      sx={{
        height: description ? 150 : 75,
        transition: "box-shadow 1s ease",
        ":hover": {
          boxShadow: "0px 0px 5px 2.5px rgba(255, 255, 255, 0.5)",
        },
      }}
      id={"task-list-card-outer-container"}
    >
      <Typography id={"task-list-item-title"}>{title}</Typography>
      <IconButton
        onClick={() => {
          removeTask(id);
        }}
        id={"task-list-item-delete"}
      >
        <DeleteForeverOutlinedIcon />
      </IconButton>

      <Typography
        sx={{ top: description ? "25%" : "40%" }}
        id={"task-list-item-date"}
      >
        {`Due ${dueDate} | ${dueTime}`}
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

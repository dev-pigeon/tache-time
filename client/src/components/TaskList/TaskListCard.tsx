import { Paper, Typography, IconButton, Box } from "@mui/material";
import { TaskListItem } from "../../interfaces/TaskListItem";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import "../../styles/TaskListCard.css";

const TaskListCard = ({
  title,
  description,
  dueDate,
  dueTime,
  estimatedTime,
}: TaskListItem) => {
  return (
    <Paper
      sx={{ height: description ? 150 : 75 }}
      id={"task-list-card-outer-container"}
    >
      <Typography id={"task-list-item-title"}>{title}</Typography>
      <IconButton id={"task-list-item-delete"}>
        <DeleteForeverOutlinedIcon />
      </IconButton>

      <Typography
        sx={{ top: description ? "23%" : "35%" }}
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

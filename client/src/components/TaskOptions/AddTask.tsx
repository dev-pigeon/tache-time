import { IconButton, Paper, Stack, Typography } from "@mui/material";
import "../../styles/AddTask.css";
import CloseIcon from "@mui/icons-material/Close";
const AddTask = () => {
  return (
    <Paper id={"add-task-outercontainer"}>
      <Stack id={"title-container"} direction={"row"}>
        <Typography padding={0.5} id={"title-label"}>
          Create Task
        </Typography>
        <IconButton id={"close-button"}>
          <CloseIcon
            sx={{ fill: "black", fontSize: 30 }}
            id={"close-button-icon"}
          />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default AddTask;

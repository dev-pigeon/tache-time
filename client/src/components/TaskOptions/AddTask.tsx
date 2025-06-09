import { IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import "../../styles/AddTask.css";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "../CustomTextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const AddTask = () => {
  return (
    <Paper id={"add-task-outercontainer"}>
      <Stack width={"100%"} position={"relative"} alignItems={"center"}>
        <Stack id={"title-container"} direction={"row"}>
          <Typography padding={0.5} id={"title-label"}>
            Create Task
          </Typography>
          <IconButton id={"close-button"}>
            <CloseIcon sx={{ fill: "white", fontSize: 30 }} />
          </IconButton>
        </Stack>

        <Stack id={"name-time-container"} direction={"row"}>
          <CustomTextField
            sxIn={{ left: "3%" }}
            widthIn={"40%"}
            label="Task Name"
          />
          <CustomTextField
            widthIn={"40%"}
            label="Estimated Time"
            sxIn={{ left: "15%" }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AddTask;

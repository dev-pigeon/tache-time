import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import "../../styles/AddTask.css";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "../CustomTextField";

import CustomDatePicker from "../CustomDatePicker";
const AddTask = () => {
  return (
    <Paper id={"add-task-outercontainer"}>
      <Stack width={"100%"} position={"relative"} alignItems={"center"}>
        <Stack id={"title-container"} direction={"row"}>
          <Typography padding={0.5} id={"title-label"}>
            Create Task
          </Typography>
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
            sxIn={{ left: "3%" }}
            widthIn={"40%"}
            label="Task Name"
          />
          <CustomTextField
            widthIn={"40%"}
            label="Estimated Time"
            sxIn={{ left: "15%" }}
            adornment="hours"
          />
        </Stack>

        <Stack direction={"row"} id={"duedate-container"}>
          <CustomDatePicker
            sxIn={{ position: "relative", width: "40%", left: "3%" }}
          />
          <CustomDatePicker
            sxIn={{ position: "relative", width: "40%", left: "15%" }}
          />
        </Stack>

        <CustomTextField
          widthIn={"80%"}
          label="Description"
          rows={2}
          sxIn={{ top: "44%", right: "7%" }}
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

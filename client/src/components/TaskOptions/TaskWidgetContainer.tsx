import { Box } from "@mui/material";
import TaskWidget from "./TaskWidget";

const TaskWidgetContainer = () => {
  return (
    <Box sx={{ position: "fixed", bottom: "5%", right: "10%" }}>
      <TaskWidget />
    </Box>
  );
};

export default TaskWidgetContainer;

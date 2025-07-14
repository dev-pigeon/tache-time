import { Paper, Tooltip, Typography } from "@mui/material";
import "../../styles/TaskChip.css";
import { TaskChipProps } from "../../interfaces/TaskChipProps";

const TaskChip = ({ title }: TaskChipProps) => {
  return (
    <Tooltip arrow placement="top" title={title}>
      <Paper className="task-chip-container">
        <Typography>{"Task"}</Typography>
      </Paper>
    </Tooltip>
  );
};

export default TaskChip;

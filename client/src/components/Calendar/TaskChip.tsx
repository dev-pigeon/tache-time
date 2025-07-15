import { Paper, Tooltip, Typography } from "@mui/material";
import "../../styles/TaskChip.css";
import { TaskChipProps } from "../../interfaces/TaskChipProps";

const TaskChip = ({ title, dateString }: TaskChipProps) => {
  return (
    <Tooltip arrow placement="top" title={`Due ${dateString}`}>
      <Paper className="task-chip-container">
        <Typography className="task-chip-text">{title}</Typography>
      </Paper>
    </Tooltip>
  );
};

export default TaskChip;

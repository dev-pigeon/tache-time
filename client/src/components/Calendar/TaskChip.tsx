import { Paper, Typography } from "@mui/material";

interface TaskChipProps {
  title: string;
}

const TaskChip = ({ title }: TaskChipProps) => {
  return (
    <Paper className="task-chip-container">
      <Typography className="task-chip-typography">{title}</Typography>
    </Paper>
  );
};

export default TaskChip;

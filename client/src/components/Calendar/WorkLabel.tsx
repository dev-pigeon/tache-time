import { Stack, Chip, Typography } from "@mui/material";

interface WorkLabelProps {
  bgColor: string;
  text: string;
}

const WorkLabel = ({ bgColor, text }: WorkLabelProps) => {
  return (
    <Stack direction={"row"} gap={1}>
      <Chip sx={{ backgroundColor: bgColor, height: 20 }} />
      <Typography color={"white"}>{text}</Typography>
    </Stack>
  );
};

export default WorkLabel;

import { Box, Typography } from "@mui/material";

import "../styles/Header.css";
import "../styles/ViewControlContainer.css";
import ViewControlContainer from "./ViewControlContainer";

const Header = () => {
  return (
    <Box id={"header"}>
      <Typography id={"header-title"}>Tâche Time</Typography>
      <ViewControlContainer />
    </Box>
  );
};

export default Header;

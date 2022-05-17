/**
 * @file logsDisplay.js
 * @author Devin Arena
 * @description Displays the logs from the main server.
 * @since 5/17/2022
 **/

import {
  Box,
  TextareaAutosize,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

const LogsDisplay = (props) => {
  const [tab, setTab] = useState(0);

  const currentTab = () => {
    switch (tab) {
      case 0:
        return logDisplay("Startup", props.logs.startup);
      case 1:
        return logDisplay("Server", props.logs.server);
      case 2:
        return logDisplay("Software", props.logs.software);
    }
  };

  const logDisplay = (title, log) => {
    return (
      <Paper sx={{ mt: 4, py: 2, px: 4, height: 500 }}>
        <Typography variant="h4" component="h1">
          {title} Log
        </Typography>
        <TextareaAutosize
          aria-label="logs"
          maxRows={20}
          value={log}
          readOnly
          style={{
            width: "100%",
            height: "80%",
            resize: "none",
            outline: "none",
            overflow: "auto",
          }}
        />
        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="outlined" onClick={() => setTab(0)} sx={{ mx: 2 }}>
            Startup
          </Button>
          <Button variant="outlined" onClick={() => setTab(1)} sx={{ mx: 2 }}>
            Server
          </Button>
          <Button variant="outlined" onClick={() => setTab(2)} sx={{ mx: 2 }}>
            Software
          </Button>
        </Box>
      </Paper>
    );
  };

  return <Box sx={{ width: "100%" }}>{currentTab()}</Box>;
};

export default LogsDisplay;

import { Box, Container, Typography } from "@mui/material";
import Axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import LogsDisplay from "../components/logsDisplay";

const Home = (props) => {
  useEffect(() => console.log(props.logs), []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Smart Home</title>
      </Head>
      <Container maxWidth="md" width="md" sx={{ mt: 8 }}>
        <Typography variant="h2" component="h1" align="center">
          Smart Home
        </Typography>
        <Typography variant="h4" component="h1" align="center">
          ~ $ What would you like to do?
        </Typography>
        {props.logs && <LogsDisplay logs={props.logs} />}
      </Container>
    </Box>
  );
};

export async function getServerSideProps({}) {
  const startup = await Axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/api/log/startup"
  );
  const server = await Axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/api/log/server"
  );
  const software = await Axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/api/log/software"
  );

  let logs = {};

  if (startup.data) logs.startup = startup.data;
  if (server.data) logs.server = server.data;
  if (software.data) logs.software = software.data;

  return { props: { logs } };
}

export default Home;

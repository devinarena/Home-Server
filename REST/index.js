/**
 * @file index.js
 * @author Devin Arena
 * @description Entrypoint for the application. Starts the express server for HTTP requests.
 * @since 4/18/2022
 **/

const PORT = process.env.port || 5000;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const ping = (req, res) => {
  res.send("pong");
};

const getLog = (req, res) => {
  const { log } = req.params;

  res.sendFile(
    path.join("home", "pi", "logs", `${log}.log`),
    { root: "/" },
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
};

app.get("/api/ping", ping);
app.get("/api/log/:log", getLog);
app.listen(PORT, () => console.log(`HTTP API started on port ${PORT}`));

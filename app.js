// ! required libraries
import express from "express";

// ! config file
import config from "./config/const.js";

// ! routes files
import LinkdinRoute from "./routes/login.js";
import BrowserRoute from "./routes/browser.js";
import ScheduleRoute from "./routes/schedule.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ! Browser
app.use("/api/v1/browser", BrowserRoute);

// ! to login into linkedin
app.use("/api/v1/linkdin", LinkdinRoute);

// ! To Schedule Linkdin Post
app.use("/api/v1/schedule", ScheduleRoute);

let port = config.port;

app.listen(port, () => {
  console.log("Server is running on port 3003");
});

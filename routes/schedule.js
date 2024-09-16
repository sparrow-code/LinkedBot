import express from "express";

import choosePage from "../middleware/choosePage.js";
import { schedulePost } from "../controller/schedule.js";

const router = express.Router();

router.route("/post").post(choosePage, schedulePost);

export default router;

import express from "express";
import { LoginLinkdin, OpenLinkdin } from "../controller/login.js";

const router = express.Router();

router.route("/login").post(LoginLinkdin);
router.route("/open").get(OpenLinkdin);
router.route("/logout").post(LoginLinkdin);

export default router;

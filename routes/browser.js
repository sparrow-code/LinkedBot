import express from "express";
import { startBrowser, stopBrowser, getPage } from "../utils/browser.js";

const router = express.Router();

router.route("/start").get(async (req, res) => {
  const browser = await startBrowser();
  res.status(200).json(browser);
});
router.route("/stop").get(async (req, res) => {
  const browser = await stopBrowser();
  res.status(200).json(browser);
});
router.route("/page").get(async (req, res) => {
  const page = await getPage();
  res.status(200).json(page);
});

export default router;

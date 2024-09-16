import { startBrowser, getPage } from "../utils/browser.js";

const LoginLinkdin = async (req, res) => {
  const { username, password } = req.body;
  // ! Open Browser with Login Page
  await startBrowser();
  const { page } = await getPage();

  const loginLink = `https://www.linkedin.com/uas/login`;

  // ! Login Linkdin By Credentials in Post
  await page.goto(loginLink, { waitUntil: "networkidle0" });
  await page.type("#username", username);
  await page.type("#password", password);
  await page.click('button[type="submit"]');

  await page.waitForNavigation({ waitUntil: "networkidle0" });

  // ! Login Linkdin By Credentials in Post
  res.status(200).json({ message: "Login Route" });
};

const OpenLinkdin = async (req, res) => {
  const { page } = await getPage();

  await page.goto("https://www.linkedin.com/feed/");

  res.status(200).json({ message: "Open Route" });
};

export { LoginLinkdin, OpenLinkdin };

import config from "../config/const.js";

import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

var browser, page;

const startBrowser = async () => {
  try {
    browser = await puppeteer.launch({
      headless: config.headless,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
        "--disable-gpu",
      ],
      userDataDir: "./browserData",
    });

    page = await browser.newPage();
    return { status: true, message: "Browser Started", browser: browser };
  } catch (err) {
    console.log("Error on Browser Start : ", err.message);
    throw err.message;
  }
};

const stopBrowser = async () => {
  try {
    await browser.close();

    return { status: true, message: "Browser Closed" };
  } catch (err) {
    console.log("Error on Browser Stop : ", err.message);
    throw err.message;
  }
};

const getBrowser = async () => {
  try {
    return { status: true, message: "Browser Started", browser: browser };
  } catch (err) {
    console.log("Error on Getting Browser : ", err.message);
    throw err.message;
  }
};

const getPage = async () => {
  try {
    return { status: true, message: "Page Started", page: page };
  } catch (err) {
    console.log("Error on Getting Page : ", err.message);
    throw err.message;
  }
};

const isPageClosed = (page) => {
  try {
    // If the main frame has been detached, then the page is closed
    return !page.mainFrame();
  } catch (err) {
    // If an error is thrown, then the page is closed
    return true;
  }
};

// Clear Cookie on Specific Page
const clearCookie = async () => {
  try {
    const client = await page.target().createCDPSession();
    await client.send("Network.clearBrowserCookies");
    await client.send("Network.clearBrowserCache");

    return { status: true, message: "Cookie Cleared" };
  } catch (err) {
    console.log("Error on Clearing Cookie : ", err.message);
    throw err.message;
  }
};

export {
  // ! For Normal Browser
  startBrowser,
  getPage,
  getBrowser,
  isPageClosed,
  stopBrowser,
  clearCookie,
};

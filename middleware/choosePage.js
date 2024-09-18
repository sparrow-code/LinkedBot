import config from "../config/const.js";
import { getBrowser, getPage, startBrowser } from "../utils/browser.js";

const choosePage = async (req, res, next) => {
  const type = req.query.type;
  let url = ``,
    current_url;

  if (type === "me") {
    url = "https://www.linkedin.com/feed/";
  } else if (type == "company") {
    url = `https://www.linkedin.com/company/${config.company_id}/admin/page-posts/published/`;
  }

  try {
    const { browser } = await getBrowser();
    if (!browser) {
      await startBrowser();
    }
    const { page } = await getPage();

    // get page url
    if (page) {
      current_url = await page.url();
    }

    if (current_url !== url) {
      await page.goto(url);
    }
    req.body.url = url;
  } catch (err) {
    throw err;
  } finally {
    next();
  }
};

export default choosePage;

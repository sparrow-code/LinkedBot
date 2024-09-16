import config from "../config/const.js";
import { getPage } from "../utils/browser.js";

const choosePage = async (req, res, next) => {
  const type = req.query.type;
  let url = ``;
  if (type === "me") {
    url = "https://linkedin.com/feed/";
  } else if (type == "company") {
    url = `https://linkedin.com/company/${config.company_id}/admin/page-posts/published/`;
  }

  try {
    const { page } = await getPage();

    // get page url
    const page_url = await page.url();

    if (page_url !== url) {
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

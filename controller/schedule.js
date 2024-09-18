import { getPage } from "../utils/browser.js";

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

const schedulePost = async (req, res) => {
  const { page } = await getPage();
  const { content, date, time } = req.body;

  try {
    await page.waitForSelector(
      '[class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view share-box-feed-entry__trigger"]',
      {
        visible: true,
        timeout: 10000,
      }
    );
    await page.click(
      '[class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view share-box-feed-entry__trigger"]'
    );

    // ! To Write Content
    await WriteContent(page, content);

    // ! Schedule Post
    await Schedule(page, date, time);

    res.status(200).json({ message: "Schedule Route" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const WriteContent = async (page, content) => {
  try {
    // ! set text
    await page.waitForSelector(
      '[class="editor-content ql-container"]',
      { visible: true },
      { timeout: 10000 }
    );

    await page.waitForSelector(".ql-editor");
    await delay(2000);
    // Focus and set text inside the contenteditable div
    await page.evaluate((content) => {
      const editor = document.querySelector(".ql-editor");
      editor.innerHTML = content;
    }, content);
    await delay(2000);
  } catch (err) {
    throw err;
  }
};

const AddFile = (file) => {};

const Schedule = async (page, date, time) => {
  try {
    // ! click on schedule button
    await page.click('[aria-label="Schedule post"]');

    /*
    ! Fill The Date
    */
    await page.waitForSelector("#share-post__scheduled-date");

    await page.evaluate(() => {
      const input = document.querySelector("#share-post__scheduled-date");
      input.value = "";
    });
    await page.type("#share-post__scheduled-date", date);
    await delay(2000);

    // ! Fill The Time
    await page.waitForSelector("#share-post__scheduled-time");

    await page.evaluate(() => {
      const input = document.querySelector("#share-post__scheduled-time");
      input.value = "";
    });
    await page.type("#share-post__scheduled-time", time);
    await delay(2000);

    await page.evaluate(() => {
      document
        .querySelector('.share-box-footer__primary-btn[aria-label="Next"]')
        .click();
    });

    await page.evaluate(() => {
      document.querySelector(".share-actions__primary-action").click();
    });
  } catch (err) {
    throw err;
  }
};
export { schedulePost };

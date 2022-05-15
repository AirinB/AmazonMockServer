import chromium from "chrome-aws-lambda";

const getHtml = async (url) => {
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
  });

  const page = await browser.newPage();
  await page.goto(url);
  const data = await page.evaluate(() => document.querySelector("*").outerHTML);
  browser.close();

  return data;
};

module.exports = {
  getHtml,
};

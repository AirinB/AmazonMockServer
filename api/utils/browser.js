const puppeteer = require("puppeteer");

const getHtml = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const data = await page.evaluate(() => document.querySelector("*").outerHTML);
  browser.close();

  return data;
};

module.exports = {
  getHtml,
};

const express = require("express");
const cors = require("cors");
const app = express();
const parseAmazon = require("./api/utils/scraper");
const { getHtml } = require("./api/utils/browser");

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/parse-amazon", (req, res) => {
  if (!req.query.url) {
    res.status(400).send("missing URL param");
    return;
  }

  const htmlPromise = getHtml(req.query.url);

  parseAmazon(req.query.url)
    .then((data) => {
      console.log({ data });
      if (!data.prices || !Object.keys(data.prices).length) {
        return htmlPromise.then((html) => {
          return parseAmazon(parseAmazon).then(res.send);
        });
      }
      res.send(data);
    })
    .catch((error) => {
      console.log({ error });
      res.status(500).send(error);
    });
});

app.get("/debug", (req, res) => {
  if (!req.query.url) {
    res.status(400).send("missing URL param");
    return;
  }
  getHtml(req.query.url)
    .then((text) => {
      res.attachment("debug.txt");
      res.type("txt");
      res.send(text);
    })
    .catch((error) => {
      console.log({ error });
      res.status(500).send(error);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

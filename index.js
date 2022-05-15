const express = require("express");
const cors = require("cors");
const app = express();
const parseAmazon = require("./api/utils/scraper");

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/parse-amazon", (req, res) => {
  if (!req.query.url) {
    res.status(400).send("missing URL param");
    return;
  }

  parseAmazon(req.query.url)
    .then((data) => {
      console.log({ data });
      res.send(data);
    })
    .catch((error) => {
      console.log({ error });
      res.status(500).send(error);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

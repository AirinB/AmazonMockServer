const express = require("express");
const cors = require('cors');
const app = express();
const christmas = require("./api/christmas");
const birthday = require("./api/birthday");
const anniversary = require("./api/anniversary");
const product = require("./api/product");
const woman = require("./api/woman");
const man = require("./api/man");
const valentines = require("./api/valentines");

app.use(cors())
app.use(express.json({ extended: false }));

app.use("/api/product", product);
app.use("/api/christmas", christmas);
app.use("/api/birthday", birthday);
app.use("/api/anniversary", anniversary);
app.use("/api/valentines", valentines);
app.use("/api/woman", woman);
app.use("/api/man", man);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

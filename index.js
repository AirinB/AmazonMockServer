// const express = require('express')
// const app = express()
// const port = 8080
//
//
// // run server on node .
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
//
// app.get('/christmas', (req, res) => {
//     const result = getData('./API_Json_Responces/search_Christmas.json');
//     res.send(result);
// });
//
// app.get('/birthday', (req, res) => {
//     const result = getData('./API_Json_Responces/seach_birthday.json');
//     res.send(result);
// });
//
// app.get('/anniversary', (req, res) => {
//     const result = getData('./API_Json_Responces/search_aniversary_gifts.json');
//     res.send(result);
// });
//
// app.get('/valentines', (req, res) => {
//     const result = getData('./API_Json_Responces/search_valentines.json');
//     res.send(result);
// });
//
// app.get('/woman', (req, res) => {
//     const result = getData('./API_Json_Responces/search_woman_gifts.json');
//     res.send(result);
// });
//
// app.get('/man', (req, res) => {
//     const result = getData('./API_Json_Responces/search_man_gifts.json');
//     res.send(result);
// });
//
//
// app.listen(port, () => {
//     console.log(`App running on http://localhost:${port}`)
// })


const express = require("express");
const app = express();
const christmas = require("./api/christmas");
const product = require("./api/product");
// const product = require("./api/product");
// const product = require("./api/product");

app.use(express.json({ extended: false }));

app.use("/api/product", product);
app.use("/api/christmas", christmas);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

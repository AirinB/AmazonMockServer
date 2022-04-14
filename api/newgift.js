const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

/**
 * GET christmas gifts items.
 *
 * @return product list | empty.
 */

const fileDirectory = 'API_Json_Responces'
const getFileName = (category, type = '') => `search_${category}${type ? "_" + type : ""}.json`

router.post("/", async (req, res) => {

    try {
        const {category, gift} = req.body;
        const fileName = getFileName(category, gift ? 'gifts': '');
        const filePath = path.join(fileDirectory, fileName);
        const fileExists = fs.existsSync(filePath);

        if (fileExists) {
            const fileContents = fs.readFileSync(filePath, 'utf-8');
            const contentsJson = JSON.parse(fileContents);

            contentsJson.results.push(gift);
            fs.writeFileSync(filePath, JSON.stringify(contentsJson, null, 2));
        }
        // TODO send the right code and message
        res.send(req.body);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;

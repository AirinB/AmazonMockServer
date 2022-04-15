const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const getFileContents = require("./utils/getFileContents");
const writeFileContents = require("./utils/writeFileContents");
/**
 * GET christmas gifts items.
 *
 * @return product list | empty.
 */
const sample_object = {
    "asin": "",
    "title": "",
    "image": "",
    "full_link": "",
    "prices": {
    "current_price": 0,
        "previous_price": -1,
        "currency": "$"
    },
    "reviews": {
    "total_reviews": 0,
        "stars": 0
    },
    "prime": false,
    "sponsored": false,
    "amazon_choice": false,
    "out_of_stock": false
}

const fileDirectory = 'resources'
const getFileName = (category, type = '') => `search_${category}_gifts.json`

router.post("/", async (req, res) => {

    try {
        const {category, gift} = req.body;
        console.log(gift);
        const fileName = getFileName(category, gift ? 'gifts': '');

        const contentsJson = getFileContents(fileName);

        if (contentsJson){
            let json_gift = sample_object
            console.log(json_gift);
            console.log( gift);

            json_gift.title = gift.title
            json_gift.prices.current_price = gift.price
            json_gift.full_link = gift.link
            json_gift.image = gift.photoLink
            console.log(json_gift);

            contentsJson.results.push(json_gift);
            writeFileContents(fileName, JSON.stringify(contentsJson, null, 2));
            console.log("The new gift is added to ", category);
        } else {
            console.log("Filename does not exists" + fileName);
        }
        res.send(req.body);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error: " + error.message);
    }
});

module.exports = router;

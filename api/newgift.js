const express = require("express");
// const jsonData = require("./data.json");
const fs = require("fs");
const router = express.Router();

/**
 * GET christmas gifts items.
 *
 * @return product list | empty.
 */

router.post("/", async (req, res) => {

    try {
        //TODO
        // 1. check if the category exists
        // 2. check if other important data is in the json element
        // 3. add new element at the end of the file in the right structure
        // 4. send the message + code
        // 5. Push the code on git
        // 6. check in vercel if the API is working as expected
        // 7. make a post request from the client t

        // console.log('receiving data ...');
        // const category = req.body.category;
        // const gift = req.body.gift;
        // if (gift.hasOwnProperty('full_link') && gift.hasOwnProperty('image') && gift.hasOwnProperty('prices')
        //     && gift.hasOwnProperty('reviews') && gift.hasOwnProperty('prime')
        //     && gift.prices.hasOwnProperty('current_price') && gift.prices.hasOwnProperty('previous_price')
        //     && gift.reviews.hasOwnProperty('stars')) {
        //     console.log("Properties exists");
        //
        //
        //
        // }

        res.send(req.body);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;

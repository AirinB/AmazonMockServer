const express = require("express");
const router = express.Router();

/**
 * GET christmas gifts items.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
    try {
        const jsonData= require('../API_Json_Responces/search_christmas_gifts.json');
        res.send(jsonData.results);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;

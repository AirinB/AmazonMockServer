const express = require("express");
const router = express.Router();
const getFileContents = require("./utils/getFileContents");
/**
 * GET christmas gifts items.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
    try {
        const jsonData = getFileContents('search_anniversary_gifts_old.json');
        res.send(jsonData.results);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error", error);
    }
});

module.exports = router;

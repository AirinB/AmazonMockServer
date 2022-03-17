const express = require('express')
const app = express()
const port = 8000

// run server on node .
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})

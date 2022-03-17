const express = require('express')
const app = express()
const port = 8000

// run server on node .
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/christmas', (req, res) => {
    res.send('Christmas');
});

app.get('/birthday', (req, res) => {
    res.send('Birthday');
});

app.get('/anniversary', (req, res) => {
    res.send('Anniversary');
});

app.get('/valentines', (req, res) => {
    res.send('Valentines');
});

app.get('/woman', (req, res) => {
    res.send('Woman');
});

app.get('/man', (req, res) => {
    res.send('man');
});


app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})

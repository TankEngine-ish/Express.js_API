const express = require ('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Heeeellooo');
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello is it me!</li></ul>');
});

app.post('/messages', (req, res) => {
    console.log('Updating my ass..');
});




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});
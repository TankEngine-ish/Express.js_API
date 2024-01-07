const express = require ('express');

const app = express();

const PORT = 3000;

const items = [
    {
        id: 0,
        name: 'apple'
    },
    {
        id: 1,
        name: 'orange'
    }];



app.get('/items', (req, res) => {
    res.json(items);  
})



app.get('/items/:itemId', (req, res) => {
    const itemId = Number(req.params.itemId);
    const item = items[itemId];
    if (item) {
        res.status(200).json(item);
    }else {
        res.status(404).json({
            error:"item doesn't exist"
        });
    }
})


app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello is it me!</li></ul>');
});

app.post('/messages', (req, res) => {
    console.log('Updating my ass..');
});

// three different routers. each pairing an http method with the name of a route.



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});
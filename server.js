const express = require ('express');

const itemsController = require ('./controllers/items.controller');
const messagesController = require ('./controllers/messages.controller')


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
    }
];



app.use((req, res, next) => {
    const start = Date.now();
        next();
    const delta = Date.now() - start;
        console.log(`${req.method} ${req.url} ${delta}ms`);
})
//this timer middleware captures as much of the work as possible, hence its position in the code

app.use(express.json());





// routers below...


app.post('/items', );



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


app.get('/messages', messagesController.getMessages );

app.post('/messages', messagesController.postMessage);

// four different routers. each pairing an http method with the name of a route.

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});
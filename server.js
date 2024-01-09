const express = require ('express');

const itemsController = require ('./controllers/items.controller');
const messagesController = require ('./controllers/messages.controller')

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
        next();
    const delta = Date.now() - start;
        console.log(`${req.method} ${req.url} ${delta}ms`);
})
//this timer middleware captures as much of the work as possible, hence its position in the code

app.use(express.json());

const itemsRouter = express.Router();

itemsRouter.post('/', itemsController.postItem);
itemsRouter.get('/', itemsController.getItems);
itemsRouter.get('/:itemId', itemsController.getSingleItem);

app.use('/items', itemsRouter); //mounting the items router on the app object


app.get('/messages', messagesController.getMessages );
app.post('/messages', messagesController.postMessage);

// four different routes. each pairing an http method with the name of a route.

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});

// a router is like a mini application and it has its own set of middleware
// and routes. Routers make the API more modular.
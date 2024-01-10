const express = require ('express');
const path = require('path');

const itemsRouter = require('./Routes/items.router');
const messagesRouter = require('./Routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
        next();
    const delta = Date.now() - start;
        console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})
//this timer middleware captures as much of the work as possible, hence its position in the code



app.use('/site', express.static(path.join(__dirname, 'public'))); //alterantive to this middleware for large scale projects are CDN's
app.use(express.json());


app.use('/', (req, res) => {
    res.render('index',  {
        title: 'Boilerplate HTML',
        caption: 'Empty Mall Aesthetic',
    });
});

app.use('/items', itemsRouter); 
app.use('/messages', messagesRouter);
//mounting the items and messages router on the app object

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});



// a router is like a mini application and it has its own set of middleware
// and routes. Routers make the API more modular.
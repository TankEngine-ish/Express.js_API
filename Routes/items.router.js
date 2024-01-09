const express = require('express');

const itemsController = require('../controllers/items.controller');

const itemsRouter = express.Router();


itemsRouter.use((req, res, next) =>{
    console.log('ip address:', req.ip);
    next();
});

itemsRouter.post('/', itemsController.postItem);
itemsRouter.get('/', itemsController.getItems);
itemsRouter.get('/:itemId', itemsController.getSingleItem);

module.exports = itemsRouter;
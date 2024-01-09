const model = require ('../models/items.model');

function postItem (req, res) {
    if (!req.body.name) {
     return res.status(400).json({
        error:"Missing item name!"
    })
    }
    const newItem = {
        name: req.body.name,
        id: items.length
    };
    items.push(newItem);

    res.json(newItem);
}

function getItems (req, res) {
    res.json(items);  
}


function getSingleItem (req, res) {
    const itemId = Number(req.params.itemId);
    const item = items[itemId];
    if (item) {
        res.status(200).json(item);
    }else {
        res.status(404).json({
            error:"item doesn't exist"
        });
    }
}

module.exports = {
    postItem,
    getItems,
    getSingleItem,
}
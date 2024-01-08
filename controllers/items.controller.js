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
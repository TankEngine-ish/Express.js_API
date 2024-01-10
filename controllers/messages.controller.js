const path = require ('path');

function getMessages (req, res) {
    res.render('messages', {
        title: 'fruit',
        item: 'peach',
    });
    // res.sendFile(path.join(__dirname, '..', 'public', 'image_public', 'test_image.jpg'));
}

//easier to debug with the 'function' keyword so node can tell us the name of the function straight away in the error log

function postMessage (req, res) {
    console.log('Updating messages..');
}

module.exports = {
    getMessages,
    postMessage,
}
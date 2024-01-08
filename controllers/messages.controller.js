function getMessages (req, res) {
    res.send('<ul><li>Greetings!!</li></ul>');
}

//easier to debug with the 'function' keyword so node can tell us the name of the function straight away in the error log

function postMessage (req, res) {
    console.log('Updating messages..');
}

module.exports = {
    getMessages,
    postMessage,
}
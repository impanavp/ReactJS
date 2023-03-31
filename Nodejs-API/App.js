const express = require('express');
const App = express();

App.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

module.exports = App;
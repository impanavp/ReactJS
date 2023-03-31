const http = require('http');
const App = require('./App');

const port = process.env.PORT || 3000;

const Server = http.createServer(App);

Server.listen(port);
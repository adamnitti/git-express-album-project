const express = require('express');
const albumRouter = require('./routes/albumRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(express.json());

app.use('/albums', albumRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
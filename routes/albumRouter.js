const express = require('express');
const albumRouter = express.Router();

albumRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send the album list to you');
})
.post((req, res) => {
    res.end(`Will add the album list: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /albums');
})
.delete((req, res) => {
    res.end('Deleting all albums');
});

module.exports = albumRouter;
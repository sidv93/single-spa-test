const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();

server.use(cors());
const port = 3001;

server.use(express.static(path.join(__dirname, 'dist')));

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
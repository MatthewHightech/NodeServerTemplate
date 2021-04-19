const express = require('express');
const app = express();
//const app = require("https-localhost")()
const port = 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`listening on port ${port}!`));

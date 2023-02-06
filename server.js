const express = require('express');
const path = require('path');

const PORT = 8080;

const dir = path.join(__dirname, 'static');

const app = express();
app.use(express.static(dir));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
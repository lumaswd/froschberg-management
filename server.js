const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('Froschberg Management');
});

app.listen(PORT, () => `Server listening on port ${ PORT }`);
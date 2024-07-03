const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


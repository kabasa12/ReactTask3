const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


const Football = require('./routes/Football');
const BasketBall = require('./routes/BasketBall');

app.use(Football);
app.use(BasketBall);

app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(4000);
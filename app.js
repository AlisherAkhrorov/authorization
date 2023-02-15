const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()


const PORT = process.env.PORT || 3000
const routeRouter = require('./app.router.js');
const app = express()

app.use(bodyParser.json());
app.use("/auth", routeRouter);


const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        })

    } catch (e) {
        console.log(e.message);
    }
}

start()
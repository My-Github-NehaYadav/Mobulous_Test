const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const DB = require("./connectionDB/db");
const HttpError = require('./middleware/HttpError');
const routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use(HttpError);

app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Page not found'
    });
});

app.listen(PORT, (err) => {
    if(err) {
        console.log(`Error - ${err}`)
    }else{
        console.log(`Server is running on ${PORT}`)
    }
})
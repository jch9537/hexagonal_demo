const express = require("express");
const dotenv = require("dotenv").config();

const routes = require("./infrastructure/server/index");

const app = express();
const port = process.env.DB_PORT || 3000;
app.use(routes);

app.get("/", (req, res) => {
    res.send("test Clean-architecture");
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

const express = require("express");
const cors = require('cors');
const axios = require("axios");

const app = express();

app.use(cors());


app.get("/", async (req, res) => {

    try{
        let { data } = await axios("https://www.superheroapi.com/api.php/3246243112132664/106")
        return res.json(data)
    } catch(error) {
        console.error(error);
    }
});

app.listen(4567)


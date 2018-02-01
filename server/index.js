require("dotenv").config();
const { json } = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3001;
const axios = require("axios");

app.use(cors());
app.use(json());

app.use(express.static(__dirname + "/../src"));

app.get("/styles", (req, res) => {
  axios
    .get(`http://api.brewerydb.com/v2/styles?key=${process.env.KEY}`)
    .then(response => {
      let styles = response.data.data.map(c => c.category.name);
      let ddStyles = Array.from(new Set(styles));
      return res.json(ddStyles);
    });
});

app.listen(port, () => console.log(`this is dr crane I'm listening: ${port}`));

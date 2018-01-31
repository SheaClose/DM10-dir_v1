const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 3001,
  app = express(),
  path = require("path"),
  axios = require("axios");

require("dotenv").config();
app.use("/", express.static(__dirname + "/../src"));

app.use(cors());
app.use(bodyParser.json());

app.get("/styles", (req, res) => {
  axios
    .get(`http://api.brewerydb.com/v2/styles?key=${process.env.KEY}`, {
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8001"
      }
    })
    .then(response => {
      let styles = response.data.data.map(c => c.category.name);
      let ddStyles = Array.from(new Set(styles));
      return res.json(ddStyles);
    });
});

app.listen(port, function() {
  console.log("Server listening on port", port);
});

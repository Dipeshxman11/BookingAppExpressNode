// app.js
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const sequelize = require("./utils/database");


const userRoute = require('./routes/userRoute');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/get", userRoute);
app.use("/post", userRoute);

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, "public", "views", "index.html"));
  });
  

// Start the server
sequelize
  .sync()
  .then((result) => {
    app.listen(5050);
  })
  .catch((err) => console.error(err));

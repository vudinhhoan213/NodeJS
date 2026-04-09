const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;
const Route = require("./routes");
const db = require("./config/db");

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Connect DB
db.connect();

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  }),
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init
Route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

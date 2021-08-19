const bodyParser= require("body-parser");

const express = require("express");
const morgan = require("morgan");
const fileupload = require("express-fileupload");

const mongoose = require("mongoose");
var cors = require("cors");
const app = express();

app.use(fileupload({ useTempFiles: true }));
app.use(morgan("tiny"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const port = process.env.PORT || 3001;
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", (err) => {
  console.log("connected to mongo", err);
});
mongoose.connection.on("error", () => {
  console.log("error connecting");
});
require("./models/admin");
require("./models/clients");
require("./models/voiture");
require("./models/employe");

app.use(cors());
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/authadmin"));
app.use(require("./routes/voitureroute"));
app.use(require("./routes/employesroute"));
app.use(require("./routes/payment"));

app.listen(port, () => {
  console.log("server is running on", port);
});

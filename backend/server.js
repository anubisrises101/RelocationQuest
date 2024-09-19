const path = require("path"); // Built into Node
const express = require("express");
const logger = require("morgan");
const app = express();

// Process the secrets/config vars in .env
require("dotenv").config();

// Connect to Database
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use(express.json());

app.use(require("./middleware/checkToken"));

// API Routes
app.use("/api/auth", require("./routes/auth"));
const ensureLoggedIn = require("./middleware/ensureLoggedIn");

app.use("/api/moves", ensureLoggedIn, require("./routes/moves"));
app.use("/api/apartments", ensureLoggedIn, require("./routes/apartments"));

app.get("*", function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The express app is listening on ${port}`);
});

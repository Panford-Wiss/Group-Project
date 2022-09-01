require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
// const messagesModel = require("./models/model_contact");

// routes
const api = require("./routes/api");

app.use(express.json());
app.use("/api/", api)

const PORT = process.env.PORT || 3001;

(async function () {
  await mongoose.connect("mongodb://127.0.0.1");
  console.log("Connected to database");
 
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\n`);
  });
})();

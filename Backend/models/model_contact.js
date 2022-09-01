const mongoose = require("mongoose");
const articleSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  message: {type: String, requried: true}, 
}, {collection: "messages"})


const model = mongoose.model("contact", articleSchema);

module.exports = model
const mongoose = require("mongoose");
const autoincrement = require("mongoose-auto-increment");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin, "user");

module.exports = mongoose.model("user", userSchema);

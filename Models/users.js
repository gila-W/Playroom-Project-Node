const mongoose = require("mongoose");

usersschema = new mongoose.Schema({
  userCode: String,
  userName: String,
  cellphone: String,
  phone: String,
});
exports.UserModel = mongoose.model("Users", usersschema);

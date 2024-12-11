const mongoose = require("mongoose");

usersschema = new mongoose.Schema({
  userCode: String,
  userName: String,
  userDate: String,
  phone: String,
  cellphone: String,
  depositPaid: String,
  paymentType: String,
  totalPayment: String,
  bankNumber: String,
  accountNumber: String,
  checkNumber: String,
  branchNumber: String,
  email:String,
});
exports.UserModel = mongoose.model("Users", usersschema);


const mongoose = require("mongoose");

const usersschema = new mongoose.Schema(
  {
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
    email: String,
    cityCode: { type: String }, // <--- השדה החדש

  },
  { versionKey: false }
);

exports.UserModel = mongoose.model("Users", usersschema);

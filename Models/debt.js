const mongoose = require("mongoose");

let debtSchema = new mongoose.Schema(
  {
    userCode: String,
    debt: Number,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);
exports.DebtModel = mongoose.model("Debt", debtSchema);

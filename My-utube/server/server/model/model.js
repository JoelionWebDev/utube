const mongoose = require("mongoose");

const TskSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: [true, "must provide name"],
  //   trim: true,
  //   // unique: true,
  //   maxlength: [20, "name can not be more than 20 chaeracters"],
  // },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  mobile: {
    type: String,
    // required: true,
  },
  // work: {
  //   type: String,
  //   required: true,
  // },
  // address: {
  //   type: String,
  //   required: true,
  // },
  // description: {
  //   type: String,
  //   required: true,
  // },
});
module.exports = mongoose.model("User", TskSchema);

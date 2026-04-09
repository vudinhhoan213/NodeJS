const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/F8_course");
    console.log("success connect");
  } catch (err) {
    console.log(">>> check: ", err);
  }
}

module.exports = { connect };

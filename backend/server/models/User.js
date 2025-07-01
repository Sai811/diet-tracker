const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      age: Number,
      gender: { type: String, enum: ["male", "female", "other"] },
      height: Number,
      weight: Number,
      bmi: { type: Number, default: null },
      healthissue: { type: String, default: null },
      activity: {
        type: String,
        enum: ["verylow", "low", "medium", "high", "veryhigh"],
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

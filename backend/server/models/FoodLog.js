const mongoose = require("mongoose");

const foodLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    mealtype: {
      type: String,
      enum: ["breakfast", "lunch", "snacks", "dinner"],
      required: true,
    },

    food: {
      name: String,
      quantity: Number,
      unit: String,
      calories: Number,
      carbs: Number,
      protien: Number,
      fat: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FoodLog", foodLogSchema);

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ message: "Login successful", token:token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const updateUserProfile = async (req, res) => {
  const userId = req.user;
  const { age, gender, height, weight, healthissue, activity } = req.body;

  try {
    // Optionally calculate BMI
    const bmi =
      height && weight ? (weight / (height / 100) ** 2).toFixed(2) : null;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profile: {
          age,
          gender,
          height,
          weight,
          bmi,
          healthissue,
          activity,
        },
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Profile updated", profile: updatedUser.profile });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: err.message });
  }
};

module.exports = { registerUser, loginUser, updateUserProfile };

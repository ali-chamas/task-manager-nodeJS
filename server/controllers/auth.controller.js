const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) return res.status(500).send("Username already exists!");

    const createdUser = await User.create({
      name,
      username,
      password,
    });
    const token = jwt.sign({ _id: createdUser._id }, process.env.JWT_SECRET);
    return res.status(201).json({ user: createdUser, token });
  } catch (error) {
    console.log(error);
    return res.send(500).send("Internal server error!");
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select(" -contacts");
    if (!user) return res.status(400).send("username/password incorrect!");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send("username/password incorrect");

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    return res.send(500).send("Internal server error!");
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("jwtToken");

    res.status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to logout",
      error: error.message,
    });
  }
};

module.exports = {
  register,
  login,
  logout,
};

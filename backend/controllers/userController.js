const User = require("../models/userModel");
const jwt = require('jsonwebtoken');


const createToken = (_id) => {
  return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '3d'})
}

// Login user
const loginUser = async (req, res) => {
  const {email, password}  = req.body

  try {
    const user = await User.login(email, password);

    // create atoken
    const token = createToken(user._id)

    // res.status(200).json({ email, user });
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }


};

// Signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create atoken
    const token = createToken(user._id)

    // res.status(200).json({ email, user });
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
};

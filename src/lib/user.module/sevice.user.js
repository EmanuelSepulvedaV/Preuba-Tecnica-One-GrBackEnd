// userController.js

const User = require("../models/modelo.user");

async function createNewUser(req, res) {
  const { name, email, password } = req;

  const newUser = new User({
    name,
    email,
    password,
  });

  const savedUser = await newUser.save();

  return res.status(201).json(savedUser);
}

module.exports = { createNewUser };

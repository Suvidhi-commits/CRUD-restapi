const { response } = require("express");
const user = require("../models/userschema");

//get all users
exports.getUsers = async (request, response) => {
  try {
    const users = await user.find();
    response.json(users);
  } catch (err) {
    response.send("Error" + err);
  }
};

// add all user
exports.addUser = async (request, response) => {
  const users = new user({
    name: request.body.name,
    username: request.body.username,
    password: request.body.password,
  });
  try {
    const newuser = await users.save();
    response.json(newuser);
  } catch (err) {
    response.send("Error" + err);
  }
};

// get a user by its id
exports.getUserById = async (request, response) => {
  try {
    const users = await user.findById(request.params.id);
    response.json(users);
  } catch (err) {
    response.send("Error" + err);
  }
};

// edit or update user data
exports.editUser = async (request, response) => {
  try {
    const users = await user.findById(request.params.id);
    (users.name = request.body.name), (users.username = request.body.username);
    const newuser = await users.save();
    response.json(newuser);
  } catch (err) {
    response.send("Error", +err);
  }
};

// delete user data
exports.deleteUser = async (request, response) => {
  try {
    await user.deleteOne({ _id: request.params.id });
    response.json("user deleted successfully");
  } catch (error) {
    response.json({ message: error.message });
  }
};

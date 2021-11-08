const express = require("express");
const {
  getUsers,
  addUser,
  getUserById,
  deleteUser,
  editUser,
} = require("../controller/usercontroller");

const route = express.Router();

route.get("/", getUsers);
route.post("/add", addUser);
route.get("/:id", getUserById);
route.patch("/:id", editUser);
route.delete("/:id", deleteUser);
module.exports = route;

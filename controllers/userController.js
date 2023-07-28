const path = require("path");
const Sequelize = require("sequelize");
const User = require("../models/userModel");

exports.getBookingPage = (_req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "public", "views", "index.html"));
};

exports.getUsers = async (_req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

exports.addUser = async (req, res, next) => {
  const userName = req.body.userName;
  const contact = req.body.contact;
  const email = req.body.email;

  try {
    const newUser = await User.create({
      userName: userName,
      contact: contact,
      email: email,
    });
    console.log("Added to User");
    res.redirect("/get");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to add user" });
  }
};

exports.deleteUser = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      console.log("User Deleted");
      res.redirect("/get");
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

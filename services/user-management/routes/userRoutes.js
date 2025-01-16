const express = require("express");
const {
  getAllUsers,
  getCaptcha,
  login,
  createUser,
  getUserById,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/getCaptcha", getCaptcha);
userRouter.post("/login", login);
userRouter.post("/createUser", createUser);
userRouter.get("/getAllUsers", getAllUsers);
userRouter.get("/getUserById/:id", getUserById);




module.exports = { userRouter};

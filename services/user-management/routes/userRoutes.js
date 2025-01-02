const express = require("express");
const {
  getAllUsers,
  getCaptcha,
  login,
  createUser,
} = require("../controllers/userCotroller");
const userRouter = express.Router();


userRouter.post("/createUser", createUser);
userRouter.get("/getAllUsers", getAllUsers);
userRouter.get("/getCaptcha", getCaptcha);
userRouter.post("/login", login);



module.exports = { userRouter, getCaptcha, login,createUser };

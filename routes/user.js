var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signup,signin,removeUser,getUserById,updateUser } = require("../controller/user");


router.param("_id", getUserById);

router.post(
  "/signup",
  [
    check("name", "firstname should be at least 3 char").isLength({ min: 3 }),
    check("lastname","lastname should be at least 3 char"),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 })
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password fill is require").isLength({ min: 1 })
  ],
  signin
);

router.delete("/user/:_id",removeUser);

router.put("/user/:_id",updateUser);

module.exports = router;


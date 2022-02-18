const {createUser,getAllUsers} = require("../controller/userController");
const express = require("express");
const router = express.Router()

router.post("/register",createUser);
router.get("/getUsers",getAllUsers);

module.exports = router;
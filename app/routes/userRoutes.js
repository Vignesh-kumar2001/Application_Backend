const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/adduser", userController.addUser);
router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUserById); // Add this route
router.put("/updateuser/:id", userController.updateUser);
router.delete("/deleteuser/:id", userController.deleteUser);

module.exports = router;
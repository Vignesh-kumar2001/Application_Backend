const User = require("../models/User");

exports.addUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = await User.addUser(username, password);
        console.log("Data Saved:", newUser);
        res.send("User added: " + JSON.stringify(newUser));
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving data");
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.getUsers();
        res.send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving data");
    }
};

exports.getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.getUserById(userId);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving data");
    }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { username, password } = req.body;

    try {
        const updatedUser = await User.updateUser(userId, username, password);
        if (updatedUser) {
            console.log("Data Updated:", updatedUser);
            res.send("User updated: " + JSON.stringify(updatedUser));
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating data");
    }
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await User.deleteUser(userId);
        if (deletedUser) {
            console.log("Data Deleted:", deletedUser);
            res.send("User deleted: " + JSON.stringify(deletedUser));
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting data");
    }
};
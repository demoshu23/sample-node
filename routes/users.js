const express = require('express');
const router = express.Router();

// Sample data
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// POST new user
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;

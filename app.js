const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Node.js Demo App 🚀');
});

// Import Routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

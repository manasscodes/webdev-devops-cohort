const express = require('express');
const app = express();

app.use(express.json());

// This array will store our users
let users = []; // Each user: { id, name, email }

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a user by id
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Add a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ message: 'Name and email are required' });
        return;
    }
    const id = users.length + 1;
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update a user by id
app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    const user = users.find(u => u.id === id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
});

// Delete a user by id
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    users.splice(index, 1);
    res.json({ message: 'User deleted' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

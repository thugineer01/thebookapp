// users.route.js

const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// POST /users 
router.post('/', async (req, res) => {
  // Create new user
});

// GET /users
// GET /users/:id
// etc
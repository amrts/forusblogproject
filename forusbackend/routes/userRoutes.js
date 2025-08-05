const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/userController');

// POST api user ka login
router.post('/login', loginUser);

module.exports = router;

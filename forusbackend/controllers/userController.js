const User = require('../models/User');

// POST api user ke login
const loginUser = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ msg: 'Username is required' });
  }

  try {
    // Try to find the user
    let user = await User.findOne({ username });

    // agar not found
    if (!user) {
      user = await User.create({ username });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

module.exports = { loginUser };

const express = require('express');
const router = express.Router();

// Example route
router.post('/login', (req, res) => {
  res.json({ message: 'Auth route working!' });
});

module.exports = router;
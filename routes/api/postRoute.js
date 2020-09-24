const express = require('express');
const router = express.Router();

// @route   POST api/profile
// @desc    create a profile
// @access  Public
router.post('/', (req,res) => res.send('hello'));


module.exports = router;
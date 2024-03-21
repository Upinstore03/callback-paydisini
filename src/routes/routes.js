const express = require('express');
const { handleCallback } = require('../transactions/callback');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define route for handling requests
router.post('/api/callback', handleCallback);

module.exports = router;
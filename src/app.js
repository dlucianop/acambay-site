const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const path = require('path');

const app = express();

app.use(helmet());
app.use(cors());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);

app.use(express.static(path.join(__dirname, '../public')));

// ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/pages/index.html'));
});

module.exports = app;
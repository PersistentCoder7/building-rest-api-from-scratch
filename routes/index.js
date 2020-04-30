const express = require('express');
const router = express.Router();
const jobRoutes = require('./jobs.routes');

router.use('/jobs', jobRoutes);

module.exports = router;
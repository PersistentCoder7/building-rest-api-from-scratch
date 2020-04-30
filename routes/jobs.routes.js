const express = require('express');
const router = express.Router();
const JobController = require('../controllers/jobs.controller');

router.get('/', JobController.findAll);
router.post('/', JobController.create);

module.exports = router;

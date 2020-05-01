const express = require('express');
const router = express.Router();
const JobController = require('../controllers/jobs.controller');

router.get('/', JobController.findAll);
router.post('/', JobController.create);
router.get('/:id',JobController.findOne);
router.put('/:id',JobController.update);

module.exports = router;

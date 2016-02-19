'use strict';

const express = require('express');
const router = express.Router();

const cat = require('../controllers/categories');

router.get('/categories', cat.index);
router.get('/categories/new', cat.new);
router.post('/categories', cat.create);

module.exports = router;

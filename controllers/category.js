'use strict';

const Category = require('../models/category');

module.exports = {
  index (req, res) {
    res.render('category-index');
  },
  new (req, res) {
    res.render('category-new');
  },
  create (req, res) {
    Category.create(req.body, (err) => {
      if (err) throw err;

      res.send('create');
    });
  }
}

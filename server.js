'use strict';

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server Running just as fast as it can');
});

app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
});

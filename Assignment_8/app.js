'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/hello', function (req, res) {
    res.type('text');       // Set the response content type to plain text
    res.send('Hello World!'); // Send the response body
  });
// define endpoint for exercise 2 here


const PORT = process.env.PORT || 8000;
app.listen(PORT);
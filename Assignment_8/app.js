/*
NAME: Casey Paras
MODULE: app.js, Assignment 8
COURSE: CSC193A - Professor Kane
*/
'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
/** EXERCISE 1
 * Add a new GET endpoint, /math/circle/:r, which takes a radius as a URL parameter. 
 * It should then respond in JSON with the area and circumference.
 */
app.get('/math/circle/:r', function (req, res) {
  let r = parseFloat(req.params['r']);
  if (isNaN(r) || r <= 0) {
      res.status(400);
      res.type('text');
      res.send('Error: Radius must be a positive number.');
      return;
  }
  let area = Math.PI * (r * r); // calculate area (pi x (radius x radius))
  let circumference = 2 * Math.PI * r; // calculate circumference (2 x pi x radius) 

  res.type('application/json');
  res.json({
      area: parseFloat(area.toFixed(2)),
      circumference: parseFloat(circumference.toFixed(2))
  });
});


// define endpoint for exercise 2 here
/** EXERCISE 2
 * Add a new GET endpoint, /hello/name, which takes as query parameters 
 * a first and last parameter. It should then respond in plain text with 
 * "Hello firstName lastName" replacing firstName with the value of first
 * and lastName with the value of last
 */
app.get('/hello/name', function (req, res) {
  const first = req.query['first'];
  const last = req.query['last'];

  if (!first && !last) {
      res.status(400); // 400 error due to missing required GET parameter (first name and last name)
      res.type('text');
      res.send('Missing Required GET parameters: first, last');
  } else if (!first) {
      res.status(400); // 400 error due to missing required GET parameter (first name)
      res.type('text');
      res.send('Missing Required GET parameter: first');
  } else if (!last) {
      res.status(400); // 400 error due to missing required GET parameter (last name)
      res.type('text');
      res.send('Missing Required GET parameter: last');
  } else {
      res.type('text'); // success (no error generated), output "Hello <first name> <last name>"
      res.send(`Hello ${first} ${last}`); // Send the personalized output
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
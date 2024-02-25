
const express = require('express');
const persons  = require('./personsRoutes.js');

module.exports = app => {
  app.use(
    express.json(),
    persons
  );
};
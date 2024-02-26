
const express = require('express');
const persons  = require('./personsRoutes.js');
const categories  = require('./categoriesRoutes.js');
const courses  = require('./coursesRoutes.js');


module.exports = app => {
  app.use(
    express.json(),
    persons,
    categories,
    courses,
  );
};
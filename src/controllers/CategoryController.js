/* eslint-disable no-empty */
const Controller = require('./Controller');
const CategoryServices = require('../services/CategoryServices');

const categoryServices = new CategoryServices();

class CategoryController extends Controller {
  constructor() {
    super(categoryServices);
  }
}

module.exports = CategoryController;
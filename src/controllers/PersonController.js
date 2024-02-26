/* eslint-disable no-empty */
const Controller = require('./Controller');
const PersonServices = require('../services/PersonServices');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PersonController;
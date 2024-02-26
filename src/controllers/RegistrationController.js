/* eslint-disable no-empty */
const Controller = require('./Controller');
const RegistrationServices = require('../services/RegistrationServices');

const registrationServices = new RegistrationServices();

class RegistrationController extends Controller {
  constructor() {
    super(registrationServices);
  }
}

module.exports = RegistrationController;
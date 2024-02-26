/* eslint-disable no-empty */
const Controller = require('./Controller');
const PersonServices = require('../services/PersonServices');

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async getRegistrations(req, res) {
    try {
      const { studentId } = req.params;

      const registrationsList = await personServices.getRegistrationByStudent(Number(studentId));
      res.status(200).json(registrationsList);
    } catch (error) {
      return res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = PersonController;
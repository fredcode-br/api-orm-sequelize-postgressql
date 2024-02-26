const Services = require('./Services');

class PersonServices extends Services {
  constructor() {
    super('Person');
  }

  async getRegistrationByStudent(id) {
    const student = await super.getOneById(id);
    const registrationsList = await student.getRegisteredClasses();
    return registrationsList;
  }
}

module.exports = PersonServices;
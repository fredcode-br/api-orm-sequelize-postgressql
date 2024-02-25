/* eslint-disable no-empty */
const database = require('../models');

class PersonController {
  static async getAll(req, res){
    try {
      const personsList = await database.Person.findAll();
      res.status(200).json(personsList);
    }catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = PersonController;
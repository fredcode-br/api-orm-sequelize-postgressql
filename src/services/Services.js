const dataSource = require('../models');

class Services {
  constructor (modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.modelName].findAll();
  }
  
  async getOneById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async create(data) {
    return dataSource[this.model].create(data);
  }

  async update(updatedData, id) {
    const updatedRegistersList = dataSource[this.model].update(updatedData, {
      where: { id: id }
    });
    if (updatedRegistersList[0] === 0) {
      return false;
    }
    return true;
  }

  async delete(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }

}   


module.exports = Services;
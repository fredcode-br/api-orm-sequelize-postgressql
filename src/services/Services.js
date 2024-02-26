const dataSource = require('../models');

class Services {
  constructor (modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.modelName].findAll();
  }
  
  async getOneById(id) {
    return dataSource[this.modelName].findByPk(id);
  }

  async createRegister(data) {
    return dataSource[this.modelName].create(data);
  }

  async updateRegister(updatedData, id) {
    const updatedRegistersList = dataSource[this.modelName].update(updatedData, {
      where: { id: id }
    });
    if (updatedRegistersList[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteRegister(id) {
    return dataSource[this.modelName].destroy({ where: { id: id } });
  }

}   


module.exports = Services;
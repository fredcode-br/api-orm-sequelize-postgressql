class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registersList = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(registersList);
    } catch (error) {
      return res.status(500).send('Internal Server Error');
    }
  }

  async getOneByID(req, res) {
    const { id } = req.params;
    try {
      const register = await this.serviceEntity.getOneByID(Number(id));
      return res.status(200).json(register);
    } catch (error) {
      return res.status(500).send('Internal Server Error');
    }
  }

  async create(req, res) {
    const data = req.body;
    try {
      const newRegister = await this.serviceEntity.createRegister(data);
      return res.status(200).json(newRegister);
    } catch (error) {
      console.log(error);
      return res.status(500).send('Internal Server Error');
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedData = await this.serviceEntity.updateRegister(data, Number(id));
      if (!updatedData) {
        return res.status(400).json({ mensagem: 'Registro não foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (error) {
      return res.status(500).send('Internal Server Error');
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.serviceEntity.deleteRegister(Number(id));
      return res.status(200).json({ mensagem: `Id ${id} deletado` });


    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;
const dataSource = require('../models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }
  async getOne(id) {
    return dataSource[this.model].findByPk(id);
  }
  async create(data) {
    return dataSource[this.model].create(data);
  }
  async update(data, id) {
    const listOfUpdatedRegistry = dataSource[this.model].update(data, {
      where: {
        id: id,
      },
    });
    if (listOfUpdatedRegistry[0] === 0) {
      return false;
    }
    return true;
  }
  async delete(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;

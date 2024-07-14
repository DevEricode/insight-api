class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const listOfRecords = await this.entityService.getAllRegistry();
      return res.status(200).json(listOfRecords);
    } catch (error) {
      //error
    }
  }

  async getOneById(req, res) {
    const { id } = req.params;
    try {
      const oneRecord = await this.entityService.getOneRegistryById(Number(id));
      return res.status(200).json(oneRecord);
    } catch (error) {
      //erro
    }
  }

  async create(req, res) {
    const dataForCreation = req.body;
    try {
      const newRegistrationCreated =
        await this.entityService.createRegistry(dataForCreation);
      return res.status(200).json(newRegistrationCreated);
    } catch (error) {
      //erro
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const dataUpdated = req.body;

    try {
      const isUpdated = await this.entityService.updateRegistry(
        dataUpdated,
        Number(id),
      );

      if (!isUpdated) {
        return res
          .status(400)
          .json({ message: 'Registration has not been updated.' });
      }

      return res.status(200).json({ message: 'Updated successfully.' });
    } catch (error) {
      //error
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entityService.deleteRegistry(Number(id));
      res.status(200).json({ message: `'${id} has been deleted!'` });
    } catch (error) {
      //erro
    }
  }
}

module.exports = Controller;
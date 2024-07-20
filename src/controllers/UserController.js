const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class userController extends Controller {
  constructor() {
    super(userServices);
  }
}

module.exports = userController;

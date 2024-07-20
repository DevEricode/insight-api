const Controller = require('./Controller.js');
const ArticleServices = require('../services/ArticleServices.js');

const articleServices = new ArticleServices();

class articleController extends Controller {
  constructor() {
    super(articleServices);
  }
}

module.exports = articleController;

const Controller = require('./Controller.js');
const CommentServices = require('../services/CommentServices.js');

const commentServices = new CommentServices();

class commentController extends Controller {
  constructor() {
    super(commentServices);
  }
}

module.exports = commentController;

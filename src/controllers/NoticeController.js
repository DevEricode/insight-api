const Controller = require('./Controller.js');
const NoticeServices = require('../services/NoticeServices.js');

const noticeServices = new NoticeServices();

class noticeController extends Controller {
  constructor() {
    super(noticeServices);
  }
}

module.exports = noticeController;

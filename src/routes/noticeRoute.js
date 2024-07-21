const { Router } = require('express');
const NoticeController = require('../controllers/NoticeController.js');

const noticeController = new NoticeController();

const router = Router();

router.get('/notices', (req, res) => noticeController.getAll(req, res));
router.get('/notices/:id', (req, res) => noticeController.getOneById(req, res));
router.post('/notices', (req, res) => noticeController.create(req, res));
router.put('/notices/:id', (req, res) => noticeController.update(req, res));
router.delete('/notices/:id', (req, res) => noticeController.delete(req, res));

module.exports = router;

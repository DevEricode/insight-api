const { Router } = require('express');
const ArticleController = require('../controllers/ArticleController.js');

const articleController = new ArticleController();

const router = Router();

router.get('/articles', (req, res) => articleController.getAll(req, res));
router.get('/articles/:id', (req, res) => articleController.getOneById(req, res));
router.post('/articles', (req, res) => articleController.create(req, res));
router.put('/articles/:id', (req, res) => articleController.update(req, res));
router.delete('/articles/:id', (req, res) => articleController.delete(req, res));

module.exports = router;

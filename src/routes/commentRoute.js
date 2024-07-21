const { Router } = require('express');
const CommentController = require('../controllers/CommentController.js');

const commentController = new CommentController();
const router = Router();

router.get('/comments', (req, res) => commentController.getAll(req, res));
router.get('/comments/:id', (req, res) => commentController.getOneById(req, res));
router.post('/comments', (req, res) => commentController.create(req, res));
router.put('/comments/:id', (req, res) => commentController.update(req, res));
router.delete('/comments/:id', (req, res) => commentController.delete(req, res));

module.exports = router;

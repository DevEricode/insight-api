const { Router } = require('express');

const router = Router();

router.get('/users', (req, res) =>
  res.status(200).json({ message: 'Hello World' }),
);

module.exports = router;

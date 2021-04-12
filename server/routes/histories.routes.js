const express = require('express');
const router = express.Router();
const history = require('../controllers/history.controller');

router.get('/', history.getHistories);
router.post('/', history.createHistory);
router.get('/filter/history/:tableNumber', history.getHistoriesByTableNumber);
router.put('/:id', history.editHistory);

module.exports = router;

//router.get('/:id', order.getOrder);
//router.delete('/:id', order.deleteOrder);

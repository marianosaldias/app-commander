const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');

router.get('/', order.getOrders);
router.post('/', order.createOrder);
router.get('/:id', order.getOrder);
router.get('/filter/table/:tableNumber', order.getOrdersByTableNumber);
router.put('/:id', order.editOrder);
router.delete('/:id', order.deleteOrder);


module.exports = router;
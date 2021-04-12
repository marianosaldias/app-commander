const express = require('express');
const router = express.Router();
const product = require('../controllers/product.controller');

router.get('/', product.getProducts);
router.post('/', product.createProduct);
router.get('/:id', product.getProduct);
router.get('/filter/:type', product.getProductsByType);
router.put('/:id', product.editProduct);
router.delete('/:id', product.deleteProduct);


module.exports = router;
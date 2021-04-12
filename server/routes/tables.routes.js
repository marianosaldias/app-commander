const express = require('express');
const router = express.Router();
const table = require('../controllers/table.controller');

router.put('/:id', table.editTable);
router.get('/filter/number/:tableNumber', table.getTableByTableNumber);
router.get('/filter/status/:tableStatus', table.getTablesByTableStatus);

/*
router.get('/', table.getTables);
router.post('/', table.createTable);
router.delete('/:id', table.deleteTable);
router.get('/:id', table.getTableById);
*/

module.exports = router;

const Table = require('../models/table.model');

const tableCtrl = {};

tableCtrl.getTables = async (req, res, next) => {
    const tables = await Table.find();
    res.json(tables);
};

tableCtrl.createTable =  async (req, res, next) => {
    const table = new Table({
        tableNumber     : req.body.tableNumber,
        tableStatus     : req.body.tableStatus,
        userId          : req.body.userId,
        userNick        : req.body.userNick,
        dateTimeOpen    : req.body.dateTimeOpen,
        dateTimeClose   : req.body.dateTimeClose,
        total           : req.body.total
    });
    console.log(table);
    await table.save();
    res.json({
        'status': 'Table saved'
    });
}

tableCtrl.getTableById = async (req, res, next) => {
    const table = await Table.findById(req.params.id);
    res.json(table);
}

tableCtrl.getTablesByTableStatus = async (req, res, next) => {
    const tables = await Table.find({ 'tableStatus': req.params.tableStatus}).sort({tableNumber: 1});
    res.json(tables);
}

tableCtrl.editTable = async (req, res, next) => {
    const {id} = req.params;
    const table = {
        tableNumber     : req.body.tableNumber,
        tableStatus     : req.body.tableStatus,
        userId          : req.body.userId,
        userNick        : req.body.userNick,
        dateTimeOpen    : req.body.dateTimeOpen,
        dateTimeClose   : req.body.dateTimeClose,
        total           : req.body.total
    }
    await Table.findByIdAndUpdate(id, {$set: table}, {new: true});
    res.json({
        'status': 'Table updated'
    });
}

tableCtrl.getTableByTableNumber = async (req, res, next) => {
    const table = await Table.find({ 'tableNumber': req.params.tableNumber});
    res.json(table);
}

module.exports = tableCtrl;


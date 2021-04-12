const History = require('../models/history.model');

const historyCtrl = {};

historyCtrl.getHistories = async (req, res, next) => {
    const history = await History.find();
    res.json(history);
};

historyCtrl.createHistory =  async (req, res, next) => {
    const history = new History({
        tableNumber     : req.body.tableNumber,
        userId          : req.body.userId,
        userNick        : req.body.userNick,
        dateTimeClose   : req.body.dateTimeClose,
        total           : req.body.total
    });
    console.log(history);
    await history.save();
    res.json({
        'status': 'History saved'
    });
}

historyCtrl.editHistory = async (req, res, next) => {
    const {id} = req.params;
    const history = {
        tableNumber     : req.body.tableNumber,
        userId          : req.body.userId,
        userNick        : req.body.userNick,
        dateTimeClose   : req.body.dateTimeClose,
        total           : req.body.total
    }
    await History.findByIdAndUpdate(id, {$set: order}, {new: true});
    res.json({
        'status': 'History updated'
    });
}

historyCtrl.getHistoriesByTableNumber = async (req, res, next) => {
    const history = await History.find({ 'tableNumber': req.params.tableNumber});
    res.json(history);
}

module.exports = historyCtrl;


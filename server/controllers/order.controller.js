const Order = require('../models/order.model');

const orderCtrl = {};

orderCtrl.getOrders = async (req, res, next) => {
    const orders = await Order.find();
    res.json(orders);
};

orderCtrl.getOrdersByTableNumber = async (req, res, next) => {
    const orders = await Order.find({ 'tableNumber': req.params.tableNumber});
    res.json(orders);
}

orderCtrl.createOrder =  async (req, res, next) => {
    const order = new Order({
        orderStatus     : req.body.orderStatus,
        tableNumber     : req.body.tableNumber,
        userId          : req.body.userId,
        userNick        : req.body.userNick,
        prodId          : req.body.prodId,
        prodType        : req.body.prodType,
        prodName        : req.body.prodName,
        prodPrice       : req.body.prodPrice,
        prodQty         : req.body.prodQty        
    });
    console.log(order);
    await order.save();
    res.json({
        'status': 'Order saved'
    });
}

orderCtrl.getOrder = async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    res.json(order);
}

orderCtrl.editOrder = async (req, res, next) => {
    const {id} = req.params;
    const order = {
        orderStatus     : req.body.orderStatus,
        tableNumber     : req.body.tableNumber,
        userId          : req.body.userId,
        userNick        : req.body.userNick,
        prodId          : req.body.prodId,
        prodType        : req.body.prodType,
        prodName        : req.body.prodName,
        prodPrice       : req.body.prodPrice,
        prodQty         : req.body.prodQty  
    }
    await Order.findByIdAndUpdate(id, {$set: order}, {new: true});
    res.json({
        'status': 'Order updated'
    });
}

orderCtrl.deleteOrder = async (req, res, next) => {
    await Order.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Order deleted'
    });
}

orderCtrl.getOrdersByTableNumber = async (req, res, next) => {
    const orders = await Order.find({'tableNumber': req.params.tableNumber}).and({ "orderStatus" : { $in: ["Ordered", "In Progress", "Ready", "Delivered"] } });
    res.json(orders);
}


module.exports = orderCtrl;

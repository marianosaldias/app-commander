const Product = require('../models/product.model');

const productCtrl = {};

productCtrl.getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.json(products);
};

productCtrl.createProduct =  async (req, res, next) => {
    const product = new Product({
        type            : req.body.type,
        name            : req.body.name,
        description     : req.body.description,
        status          : req.body.status,
        price           : req.body.price,
        happyIndex      : req.body.happyIndex        
    });
    console.log(product);
    await product.save();
    res.json({
        'status': 'Product saved'
    });
}

productCtrl.getProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
}

productCtrl.getProductsByType = async (req, res, next) => {
    const product = await Product.find({ 'type': req.params.type});
    res.json(product);
}

productCtrl.editProduct = async (req, res, next) => {
    const {id} = req.params;
    const product = {
        type            : req.body.type,
        name            : req.body.name,
        description     : req.body.description,
        status          : req.body.status,
        price           : req.body.price,
        happyIndex      : req.body.happyIndex 
    }
    await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
    res.json({
        'status': 'Product updated'
    });
}

productCtrl.deleteProduct = async (req, res, next) => {
    await Product.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Product deleted'
    });
}

module.exports = productCtrl;


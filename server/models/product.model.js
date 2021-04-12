var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    type            : {type: String, required: true, enum: ['Beers', 'Sodas', 'Wines', 'Drinks', 'Fast', 'Burgers', 'Pizzas', 'Coffe', 'Tea', 'Muffins', 'Salads', 'Dishes', 'Desserts'] },
    name            : {type: String, required: true },
    description     : {type: String, required: false },
    status          : {type: String, required: true, enum: ['Disabled', 'Enabled', 'Happy'] },
    price           : {type: Number, required: true },
    happyIndex      : {type: Number, required: true }
});

//Export function to create "Product" model class
module.exports = mongoose.model('Product', ProductSchema);

/*
{
    "type": "Beers",
    "name": "Media Pinta IPA Pale-Ale",
    "description": "Cerveza artesanal x 500cm3.",
    "status": "Happy",
    "price": 85.5,
    "avatar": ""
}    
*/
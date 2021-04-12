const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderStatus     : {type: String, required: true, enum: ['Ordered', 'In Progress', 'Ready', 'Delivered', 'Closed', 'Cancelled'] },
    tableNumber     : {type: Number, required: true },
    userId          : {type: String, required: true },
    userNick        : {type: String, required: true },
    prodId          : {type: String, required: true },
    prodType        : {type: String, required: true },
    prodName        : {type: String, required: true },
    prodPrice       : {type: Number, required: true },
    prodQty         : {type: Number, required: true }
});

//Export function to create "Order" model class
module.exports = mongoose.model('Order', OrderSchema);

/*
{   
	"status"            : "Ordered",
    "tableNumber"       : 5,
    "userId"            : "5e41b0cd16e2493964aa7901",
    "UserNick"          : "Irina",
    "prodId"            : "5e420a331881d6489418a746",
    "prodType"          : "Beers",
    "prodName"          : "Media Pinta IPA Pale Ale",
    "prodPrice"         : 95,
    "prodQty"           : 1
}
*/

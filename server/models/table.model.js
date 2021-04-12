const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const TableSchema = new Schema({
    tableNumber     : {type: Number, required: true },
    tableStatus     : {type: String, required: true, enum: ['Free', 'Open'] },
    userId          : {type: String, required: false },
    userNick        : {type: String, required: false },
    dateTimeOpen    : {type: String, required: false },
    dateTimeClose   : {type: String, required: false },
    total           : {type: Number, required: false }
});

//Export function to create "Table" model class
module.exports = mongoose.model('Table', TableSchema);

/*
{   
    "tableNumber"     : 3,
    "tableStatus"     : "Open",
    "userId"          : "",
    "userNick"        : "",
    "dateTimeOpen"    : "",
    "dateTimeClose"   : "",
    "total"           : 0
}
*/

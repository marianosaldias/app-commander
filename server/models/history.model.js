const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    tableNumber     : {type: Number, required: true },
    userId          : {type: String, required: false },
    userNick        : {type: String, required: false },
    dateTimeOpen    : {type: String, required: false },
    dateTimeClose   : {type: String, required: false },
    total           : {type: Number, required: false }
});

//Export function to create "History" model class
module.exports = mongoose.model('History', HistorySchema);

/*
{   
    "tableNumber"     : 3,
    "userId"          : "",
    "userNick"        : "",
    "dateTimeOpen"    : "",
    "dateTimeClose"   : "",
    "total"           : 0
}
*/

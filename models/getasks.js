var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 

const Schema = mongoose.Schema
const userSchema= new Schema({
    askbody:String,
    username:String,
    email:String,
    createdtime:String,
    viewsconts:String,
    numberofcomments:String
})


module.exports = mongoose.model('addask',userSchema)

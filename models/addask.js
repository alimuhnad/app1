var mongoose = require('mongoose');

const Schema = mongoose.Schema
const userSchema= new Schema({
  
    askbody:String,
    username:String,
    email:String,
    createdtime:String,
    viewsconts:String,
    numberofcomments:String
})


module.exports = mongoose.model('ask',userSchema)

var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 

const Schema = mongoose.Schema
const userSchema= new Schema({
        askid:String,
        commentbody:String,
        data:String,
        usernameofthecomment:String,
        emailofthecomment:String,
        active:String,
})


module.exports = mongoose.model('addcomments',userSchema)

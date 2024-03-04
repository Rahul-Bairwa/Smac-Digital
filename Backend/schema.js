const {default:mongoose}=require('mongoose')

const UserSchema =new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
})
module.exports=mongoose.model("UserData",UserSchema)
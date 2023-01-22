const mongoose=require('mongoose');
const ObjectId= mongoose.Types.ObjectId

const taskSchema= new mongoose.Schema({
    User:String,
    Title:{type:String,required:true},
    Description:{type:String},
    Status:{type:String,enum:['Open', "in-progress","Completed"],default:"Open"},
    Deadline:{type:Date},
    isDelete:{type:Boolean,default:false}
},{timestamps:true}
)
module.exports=mongoose.model("Task",taskSchema)
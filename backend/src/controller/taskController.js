const taskModel=require('../model/taskModel');
const createTask= async (req,res)=>{
    try {
        let data=req.body
        console.log(data)
        if(Object.keys(data).length==0){return res.status(400).send({status:false,message:"Pls provide Details"})}
        let {Title,Description,Deadline}=data
        if(!Title){return res.status(400).send({status:false,message:"Title is mandetry"})}
        const taskData= await taskModel.create(data)
        return res.status(201).send({status:true,message:"done",data:taskData})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

const updateTask=async (req,res)=>{
    try {
        let data=req.body     
        console.log(data)   
        let {Title,Status}=data
        if(!Title){return res.status(400).send({status:false,message:"Pls provide Title"})}
        let updatedTask=await taskModel.findOneAndUpdate({Title},{$set:{Status:Status}},{new:true})
        if(!updatedTask){return res.status(404).send({status:false,message:"not found"})}
        return res.status(200).send({status:true, data:updatedTask})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

const getTask= async (req,res)=>{
    try {
        let allData= await taskModel.find()
        if(allData.length==0){return res.status(404).send({status:false,message:"Task not found"})}
        return res.status(200).send({statur:true,data:allData})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

module.exports={createTask, updateTask, getTask}
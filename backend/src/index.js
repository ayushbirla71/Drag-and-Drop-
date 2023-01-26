const express = require('express')
const mongoose= require('mongoose')
const route = require('./routes/route')

const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

const app=express();
app.use(cors(corsOptions))
app.use(express.json());
mongoose.connect("mongodb+srv://ayush8120:GeGo5qhr7wM6VQyg@cluster0.n1nevi5.mongodb.net/Company-project-cloud?retryWrites=true&w=majority",{ useNewUrlParser:true})
.then(()=>console.log("mongoDB is connected"))
.catch(err=>console.log(err))

app.use('/',route)
app.listen(process.env.PORT||3001, function(){console.log('Our First Project running On PORT '+(process.env.PORT||3001))
})
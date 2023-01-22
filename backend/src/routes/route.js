const express = require('express');
const router = express.Router();

//////////////////////////~Import folder~////////////////////////
const {createTask,updateTask,getTask}=require('../controller/taskController')

/////////////////////////~Router besed Api~//////////////////////
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
/////////////////////~Author Api~//////////////////////////
router.post('/creatTask',createTask)
router.put('/updateTask',updateTask)
router.get('/getTask',getTask)


/////////////////////////~exports Modules~/////////////////////////////
module.exports = router;
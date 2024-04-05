const express = require("express");
const router = express.Router();


const Room = require('../models/room')

router.get("/getallrooms", async(req, res) =>{
    //console.log('in route')
    try{
        const rooms = await Room.find({})
        res.send(rooms);
    }catch(error){
        return res.status(400).json({ message: error});
    }
});

router.post("/getroombyid", async(req, res) =>{
    //console.log('in route')
    const roomid = req.body.roomid
    try{
        const room = await Room.findOne({_id : roomid})
        res.send(room);
    }catch(error){
        return res.status(400).json({ message: error});
    }
});

module.exports = router;
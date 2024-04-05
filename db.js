const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://sherinmaryrajee:sheelakk11@cluster0.r3yipbb.mongodb.net/HiVE'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser: true}) 

var connection = mongoose.connection

connection.on('error', ()=> {
    console.log('Connection failed')
})

connection.on('connected' , ()=>{
    console.log('connection succesfull')
})

module.exports = mongoose
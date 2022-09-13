
const mongoose =require('mongoose')

const User=require('./user')
console.log("start")


    mongoose.connect("mongodb://localhost:27017/newdb",(err)=>{
        if(err)throw err;
        console.log("database connected")
    })

// new

const user=new User({name:"radhika",age:26,place:"plamapatta",phone:"12345"})
// add data save function
user.save().then(()=>{
    console.log("data saved")
    console.log(user)
})
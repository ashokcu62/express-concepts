const express=require('express')
const app=express()
const path=require('path')

// app.use middle ware 
// request varumbozhum response varumbozhum work aagunnu
// call back next() is important


app.use((req,res,next)=>{

console.log("hello")
next()

})

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'index.html'))
    next()
})

app.use((req,res,next)=>{

    console.log("end") 
    next()
    })


app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
})

//using post 
app.post('/signup',(req,res)=>{
    res.send("submitted")
})



//server
app.listen(3000,()=>{
    console.log("server started")
})
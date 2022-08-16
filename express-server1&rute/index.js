const express=require('express')
const path=require('path')
const app=express()


//1111/ app.get ('/',()=>)  root is 1st argument 

// we can use 
//  app.get 
//  app.post 
//  etc



app.get('/',(req,res)=>{
  //send : send files or data to web page  
res.send("hello its new express page")
})

app.get('/login',(req,res)=>{
    //send : send files or data to web page  
  res.send("login page")
  })




// seting a html file

app.get('/index',(req,res)=>{
    //send : send files or data to web page 
    //res.sendFile() full path 
    // __dirname = curent directory name
    // __filename= directry+filename
    
     //@path module
    // to get full path  ;  in path module path.join(__dirname,"htmlfile ")
    
  res.sendFile(path.join(__dirname,'index.html'))
  })



 // app.listen () start server 
app.listen(3000,()=>{
    console.log("server started")
})


//@ important stuff

 // __dirname = curent directory name
 // __filename= directry+filename

 //@path module
 // to get full path  ;  in path module path.join(__dirname,"htmlfile ")
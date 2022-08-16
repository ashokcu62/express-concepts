const http=require('http') 
const fs=require('fs')       //filesystem module


http.createServer((req,res)=>{

    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'}) //file details

        res.write(data)  //output
        res.end()
    })
}).listen(3000,()=>{
    console.log("server started")
})
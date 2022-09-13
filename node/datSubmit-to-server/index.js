const http = require('http')
const fs = require('fs')
const { PassThrough } = require('stream')


http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile('signup.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' }) //file details

            res.write(data)  //output
            res.end()
        })
    } else if (req.url === "/biodata") {
            var form=new formidable.IncomingForm();
            form.parse(req,(err,feilds,files))
            res.write('<h1>'+feild.name+'<h1')
            res.write('<h1>'+feild.age+'<h1')//output
            res.write('<h1>'+feild.place+'<h1')

            var oldpath=files.uploadfile.path;
            var newpath='~/Desktop/serverdata'+files.uploadfile.name;
            fs.rename(oldpath,newpath,(err)=>{
                if(err)throw err;
                res.write('file location is  ')
            })
            res.end()
        
    } else {
        res.write("error")
        res.end()
    }
}).listen(3000, () => console.log("server started"))

//formidable
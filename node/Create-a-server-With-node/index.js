const http = require('http')
http.createServer((req, res) => {
    res.write("new server")
    console.log("hello")
    res.end()
}).listen(3000)
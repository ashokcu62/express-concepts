const http = require('http')
const fs = require('fs')       //filesystem module


http.createServer((req, res) => {

    // req.url 
    // url path : req.url



    if (req.url == "/") {

        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' }) //file details

            res.write(data)  //output
            res.end()
        })

    } else if (req.url == "/signup") {

        fs.readFile('signup.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' }) //file details

            res.write(data)  //output
            res.end()
        })
    } else if (req.url == "/login") {
        res.write("login")  //output
        res.end()
    }else if (req.url == "/signupaction") {           // signup action
        res.write("action")  //output
        res.end()
    } else {
        res.write("error")  //output
        res.end()
    }

}).listen(3000, () => {
    console.log("server started")
})

///sign up action wont work becouse of req.url directly pulls the form data to the url bar 
/// url.req wont equal to the given root string 
// so we need to replace  the url.req  and import a new module 
//its url 
// get you in the next folder